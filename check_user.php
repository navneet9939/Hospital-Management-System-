<?php
require __DIR__ . '/vendor/autoload.php';
$app = require_once __DIR__ . '/bootstrap/app.php';
$kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);
$kernel->bootstrap();

$user = App\Models\User::where('email', 'rohansheikwal@gmail.com')->first();
if ($user) {
    echo "User exists.\n";
    echo "ID: " . $user->id . "\n";
    echo "Role: " . $user->role . "\n";
    echo "Created: " . $user->created_at . "\n";
    echo "Password starts with: " . substr($user->password, 0, 7) . "\n";
} else {
    echo "User not found in database.\n";
}
