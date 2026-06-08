<?php

// Vercel: buat direktori storage di /tmp sebelum Laravel boot
if (getenv('VERCEL')) {
    $dirs = [
        '/tmp/storage/logs',
        '/tmp/storage/framework/cache/data',
        '/tmp/storage/framework/sessions',
        '/tmp/storage/framework/views',
        '/tmp/storage/app/public',
    ];
    foreach ($dirs as $dir) {
        if (!is_dir($dir)) {
            mkdir($dir, 0775, true);
        }
    }
    // Override konstanta path sebelum autoload
    define('LARAVEL_STORAGE_PATH', '/tmp/storage');
}

use Illuminate\Foundation\Application;

define('LARAVEL_START', microtime(true));

require __DIR__.'/../vendor/autoload.php';

$app = require_once __DIR__.'/../bootstrap/app.php';

// Set storage path setelah app dibuat tapi sebelum handle request
if (getenv('VERCEL')) {
    $app->useStoragePath('/tmp/storage');
}

$app->handleRequest(Illuminate\Http\Request::capture());