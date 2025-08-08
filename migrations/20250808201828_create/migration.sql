-- CreateEnum
CREATE TYPE "public"."SmartDevice" AS ENUM ('SDp', 'SDG', 'SDV', 'SDM');

-- CreateEnum
CREATE TYPE "public"."Status" AS ENUM ('Ongoing', 'Done', 'NotStarted');

-- CreateEnum
CREATE TYPE "public"."ConnectionType" AS ENUM ('Input', 'Output');

-- CreateEnum
CREATE TYPE "public"."Protocol" AS ENUM ('Modbus', 'DNP3', 'IEC61850', 'AMQP');

-- CreateEnum
CREATE TYPE "public"."Transmittion" AS ENUM ('Serial', 'TCP');

-- CreateTable
CREATE TABLE "public"."Request" (
    "id" TEXT NOT NULL,
    "sigma" BOOLEAN NOT NULL DEFAULT false,
    "project" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "assigneeId" TEXT NOT NULL,
    "authorId" TEXT NOT NULL,
    "status" "public"."Status" NOT NULL DEFAULT 'NotStarted',
    "device" "public"."SmartDevice" NOT NULL DEFAULT 'SDG',
    "comment" TEXT,
    "client" TEXT,
    "third_part" TEXT,
    "docs" TEXT[],
    "back" TEXT,
    "invoice_tt" TEXT,
    "invoice_client" TEXT,

    CONSTRAINT "Request_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "setor" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."IEDs" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "manufacturer" TEXT NOT NULL DEFAULT 'Treetech',
    "homologado" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "IEDs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Connections" (
    "id" TEXT NOT NULL,
    "type" "public"."ConnectionType" NOT NULL,
    "protocol" "public"."Protocol" NOT NULL,
    "transmittion" TEXT NOT NULL,
    "details" JSONB NOT NULL,
    "requestId" TEXT NOT NULL,
    "ied" JSONB[],

    CONSTRAINT "Connections_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "public"."User"("email");

-- AddForeignKey
ALTER TABLE "public"."Request" ADD CONSTRAINT "Request_assigneeId_fkey" FOREIGN KEY ("assigneeId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Request" ADD CONSTRAINT "Request_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Connections" ADD CONSTRAINT "Connections_requestId_fkey" FOREIGN KEY ("requestId") REFERENCES "public"."Request"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
