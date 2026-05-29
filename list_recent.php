<?php
require __DIR__ . '/vendor/autoload.php';
$app = require_once __DIR__ . '/bootstrap/app.php';
$kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);
$kernel->bootstrap();

$users = App\Models\User::orderBy('id', 'desc')->take(5)->get();
foreach ($users as $u) {
    echo $u->id . ' - ' . $u->email . ' - ' . $u->created_at . "\n";
}
