<?php
require __DIR__ . '/vendor/autoload.php';
$app = require_once __DIR__ . '/bootstrap/app.php';
$kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);
$kernel->bootstrap();

$user = App\Models\User::where('email', 'admin@hospital.com')->first();
if ($user) {
    echo "ID: " . $user->id . "\n";
    echo "Email: " . $user->email . "\n";
    echo "Password: " . $user->password . "\n";
    echo "Length: " . strlen($user->password) . "\n";
} else {
    echo "Admin not found\n";
}

$user = App\Models\User::where('email', 'patient@hospital.com')->first();
if ($user) {
    echo "ID: " . $user->id . "\n";
    echo "Email: " . $user->email . "\n";
    echo "Password: " . $user->password . "\n";
    echo "Length: " . strlen($user->password) . "\n";
}
