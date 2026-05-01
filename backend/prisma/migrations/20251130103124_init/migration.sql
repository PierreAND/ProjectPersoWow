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

-- CreateTable
CREATE TABLE "BestInSlot" (
    "id" SERIAL NOT NULL,
    "tete" TEXT NOT NULL,
    "collier" TEXT NOT NULL,
    "epaule" TEXT NOT NULL,
    "cape" TEXT NOT NULL,
    "torse" TEXT NOT NULL,
    "bracelet" TEXT NOT NULL,
    "gants" TEXT NOT NULL,
    "ceinture" TEXT NOT NULL,
    "pantalon" TEXT NOT NULL,
    "bottes" TEXT NOT NULL,
    "anneaux1" TEXT NOT NULL,
    "anneaux2" TEXT NOT NULL,
    "bijoux1" TEXT NOT NULL,
    "bijoux2" TEXT NOT NULL,
    "arme1" TEXT NOT NULL,
    "arme2" TEXT NOT NULL,
    "arme3" TEXT NOT NULL,
    "speId" INTEGER,

    CONSTRAINT "BestInSlot_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Template" ADD CONSTRAINT "Template_speId_fkey" FOREIGN KEY ("speId") REFERENCES "Specialisation"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cycle" ADD CONSTRAINT "Cycle_speId_fkey" FOREIGN KEY ("speId") REFERENCES "Specialisation"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Glyphe" ADD CONSTRAINT "Glyphe_speId_fkey" FOREIGN KEY ("speId") REFERENCES "Specialisation"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BestInSlot" ADD CONSTRAINT "BestInSlot_speId_fkey" FOREIGN KEY ("speId") REFERENCES "Specialisation"("id") ON DELETE SET NULL ON UPDATE CASCADE;
