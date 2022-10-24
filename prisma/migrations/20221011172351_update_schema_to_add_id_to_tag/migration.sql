-- AlterTable
CREATE SEQUENCE "tag_id_seq";
ALTER TABLE "Tag" ALTER COLUMN "id" SET DEFAULT nextval('tag_id_seq');
ALTER SEQUENCE "tag_id_seq" OWNED BY "Tag"."id";
