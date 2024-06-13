-- CreateTable
CREATE TABLE "Bike" (
    "code" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "brand" TEXT NOT NULL,
    "createdAT" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAT" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Bike_pkey" PRIMARY KEY ("code")
);

-- CreateIndex
CREATE UNIQUE INDEX "Bike_name_key" ON "Bike"("name");
