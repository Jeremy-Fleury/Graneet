-- CreateTable
CREATE TABLE "quote" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL,
    "updatedAt" DATETIME NOT NULL,
    "amount" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "quoteLot" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL,
    "updatedAt" DATETIME NOT NULL,
    "amount" INTEGER NOT NULL,
    "quoteId" TEXT,
    "parentQuoteLotId" TEXT,
    CONSTRAINT "quoteLot_quoteId_fkey" FOREIGN KEY ("quoteId") REFERENCES "quote" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "quoteLot_parentQuoteLotId_fkey" FOREIGN KEY ("parentQuoteLotId") REFERENCES "quoteLot" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "quoteItem" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL,
    "updatedAt" DATETIME NOT NULL,
    "amount" INTEGER NOT NULL,
    "quoteLotId" TEXT,
    CONSTRAINT "quoteItem_quoteLotId_fkey" FOREIGN KEY ("quoteLotId") REFERENCES "quoteLot" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "quoteLot_quoteId_key" ON "quoteLot"("quoteId");
