-- CreateTable
CREATE TABLE "Specialisation" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "Specialisation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Template" (
    "id" SERIAL NOT NULL,
    "opti1" TEXT NOT NULL,
    "opti2" TEXT NOT NULL,
    "speId" INTEGER,

    CONSTRAINT "Template_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cycle" (
    "id" SERIAL NOT NULL,
    "monocible" TEXT NOT NULL,
    "zone" TEXT NOT NULL,
    "speId" INTEGER,

    CONSTRAINT "Cycle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Glyphe" (
    "id" SERIAL NOT NULL,
    "majeur" TEXT NOT NULL,
    "mineur" TEXT NOT NULL,
    "speId" INTEGER,

    CONSTRAINT "Glyphe_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Template" ADD CONSTRAINT "Template_speId_fkey" FOREIGN KEY ("speId") REFERENCES "Specialisation"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cycle" ADD CONSTRAINT "Cycle_speId_fkey" FOREIGN KEY ("speId") REFERENCES "Specialisation"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Glyphe" ADD CONSTRAINT "Glyphe_speId_fkey" FOREIGN KEY ("speId") REFERENCES "Specialisation"("id") ON DELETE SET NULL ON UPDATE CASCADE;
