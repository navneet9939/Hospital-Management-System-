<?php
require __DIR__ . '/vendor/autoload.php';
$app = require_once __DIR__ . '/bootstrap/app.php';
$kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);
$kernel->bootstrap();

$users = App\Models\User::orderBy('id', 'desc')->take(5)->get(['id', 'email', 'password']);
foreach ($users as $user) {
    echo "ID: " . $user->id . "\n";
    echo "Email: " . $user->email . "\n";
    echo "Password: " . $user->password . "\n";
    echo "Length: " . strlen($user->password) . "\n\n";
}
