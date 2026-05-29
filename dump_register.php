<?php
require __DIR__ . '/vendor/autoload.php';
$app = require_once __DIR__ . '/bootstrap/app.php';
$kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);
$kernel->bootstrap();

use Illuminate\Support\Facades\Hash;
use App\Models\User;

$user1 = User::create([
    'name' => 'Test1',
    'email' => 'test1@test.com',
    'password' => 'password123',
    'role' => 'patient',
]);

$user2 = User::create([
    'name' => 'Test2',
    'email' => 'test2@test.com',
    'password' => Hash::make('password123'),
    'role' => 'patient',
]);

echo "User1 (raw pass assigned) Length: " . strlen($user1->password) . "\n";
echo "User1 pass starts with: " . substr($user1->password, 0, 7) . "\n";
echo "Can Auth User1? " . (Auth::attempt(['email' => 'test1@test.com', 'password' => 'password123']) ? 'yes' : 'no') . "\n";

echo "User2 (hash passed) Length: " . strlen($user2->password) . "\n";
echo "User2 pass starts with: " . substr($user2->password, 0, 7) . "\n";
echo "Can Auth User2? " . (Auth::attempt(['email' => 'test2@test.com', 'password' => 'password123']) ? 'yes' : 'no') . "\n";
