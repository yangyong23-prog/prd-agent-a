CREATE TABLE `todos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `tenant_id` VARCHAR(191) NOT NULL,
  `title` VARCHAR(200) NOT NULL,
  `completed` BOOLEAN NOT NULL DEFAULT false,
  `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
  PRIMARY KEY (`id`),
  INDEX `todos_tenant_id_idx` (`tenant_id`),
  INDEX `todos_tenant_id_completed_idx` (`tenant_id`, `completed`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
