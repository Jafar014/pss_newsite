<?php

use Illuminate\Support\Facades\Schema;

require __DIR__.'/../vendor/autoload.php';
$app = require __DIR__.'/../bootstrap/app.php';
$app->make('Illuminate\Contracts\Console\Kernel')->bootstrap();
echo json_encode(Schema::getColumnListing('fixtures'), JSON_PRETTY_PRINT);
echo "\n";
echo json_encode(Schema::getColumnListing('match_reports'), JSON_PRETTY_PRINT);
unlink(__FILE__);
