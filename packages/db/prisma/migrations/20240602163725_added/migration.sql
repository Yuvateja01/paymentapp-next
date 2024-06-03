-- CreateTable
CREATE TABLE "Balance" (
    "id" SERIAL NOT NULL,
    "userid" INTEGER NOT NULL,
    "amount" INTEGER NOT NULL,
    "locked" INTEGER NOT NULL,

    CONSTRAINT "Balance_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Balance_userid_key" ON "Balance"("userid");

-- AddForeignKey
ALTER TABLE "Balance" ADD CONSTRAINT "Balance_userid_fkey" FOREIGN KEY ("userid") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
