import { Test } from "@nestjs/testing";

import { CityInMemoryRepository } from "../infrastructure/repositories/city-in-memory.repository";
import { CitySqliteRepository } from "../infrastructure/repositories/city-sqlite.repository";

import { CreateCityUseCase } from "./create-city.usecase";

describe("SearchCityUseCase", () => {
  let createCityUseCase: CreateCityUseCase;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        CreateCityUseCase,
        {
          provide: CitySqliteRepository,
          useValue: new CityInMemoryRepository(),
        },
      ],
    }).compile();

    createCityUseCase = module.get<CreateCityUseCase>(CreateCityUseCase);
  });

  it("should create a city", async () => {
    const got = await createCityUseCase.execute({
      cityCode: "75011",
      cityName: "Paris",
      postalCode: "75011",
      routingWording: "PARIS",
    });

    const want = {
      id: expect.stringMatching(/\w{8}-\w{4}-\w{4}-\w{4}-\w{12}/),
      cityCode: "75011",
      cityName: "Paris",
      postalCode: "75011",
      routingWording: "PARIS",
    };

    expect(got).toEqual(want);
  });
});
