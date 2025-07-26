import { Migration } from '@mikro-orm/migrations';

export class Migration20250725085610 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table if not exists "new_product" ("id" text not null, "brand" text null, "manufacturer" text null, "country_of_origin" text null, "warranty_period" integer null, "min_order_quantity" integer not null default 1, "max_order_quantity" integer null, "reorder_level" integer null, "lead_time_days" integer null, "is_featured" boolean not null default false, "is_bestseller" boolean not null default false, "meta_title" text null, "meta_description" text null, "meta_keywords" text null, "color" text null, "size" text null, "season" text check ("season" in ('spring', 'summer', 'fall', 'winter', 'all_season')) null, "cost_price" integer null, "msrp" integer null, "specifications" jsonb null, "features" jsonb null, "care_instructions" jsonb null, "launch_date" timestamptz null, "discontinue_date" timestamptz null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "new_product_pkey" primary key ("id"));`);
    this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_new_product_deleted_at" ON "new_product" (deleted_at) WHERE deleted_at IS NULL;`);
  }

  override async down(): Promise<void> {
    this.addSql(`drop table if exists "new_product" cascade;`);
  }

}
