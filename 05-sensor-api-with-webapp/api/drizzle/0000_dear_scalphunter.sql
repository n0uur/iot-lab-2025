CREATE TABLE `sensor_readings` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`sensor_name` text NOT NULL,
	`sensor_type` text NOT NULL,
	`value` real NOT NULL,
	`unit` text,
	`timestamp` integer DEFAULT (cast(strftime('%s', 'now') as integer))
);
