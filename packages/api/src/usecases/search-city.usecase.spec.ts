import { Test } from "@nestjs/testing";

import { CityInMemoryRepository } from "../infrastructure/repositories/city-in-memory.repository";
import { CitySqliteRepository } from "../infrastructure/repositories/city-sqlite.repository";

import { CreateCityUseCase } from "./create-city.usecase";
import { SearchCityUseCase } from "./search-city.usecase";

describe("SearchCityUseCase", () => {
  let createCityUseCase: CreateCityUseCase;
  let searchCityUseCase: SearchCityUseCase;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        CreateCityUseCase,
        SearchCityUseCase,
        {
          provide: CitySqliteRepository,
          useValue: new CityInMemoryRepository(),
        },
      ],
    }).compile();

    createCityUseCase = module.get<CreateCityUseCase>(CreateCityUseCase);
    searchCityUseCase = module.get<SearchCityUseCase>(SearchCityUseCase);
  });

  it("should return an array of cities", async () => {
    await createCityUseCase.execute({
      cityCode: "75011",
      cityName: "Paris",
      postalCode: "75011",
      routingWording: "PARIS",
    });

    await createCityUseCase.execute({
      cityCode: "75012",
      cityName: "Paris",
      postalCode: "75012",
      routingWording: "PARIS",
    });

    const got = await searchCityUseCase.execute("75011");
    const want = [
      {
        id: expect.stringMatching(/\w{8}-\w{4}-\w{4}-\w{4}-\w{12}/),
        cityCode: "75011",
        cityName: "Paris",
        postalCode: "75011",
        routingWording: "PARIS",
      },
    ];

    expect(got).toEqual(want);
  });

  it("should return an empty array", async () => {
    const got = await searchCityUseCase.execute("75005");
    const want = [];

    expect(got).toEqual(want);
  });
});
