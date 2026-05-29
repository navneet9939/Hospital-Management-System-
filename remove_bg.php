<?php
$img = imagecreatefrompng('public/images/heavenbed_logo.png');
$bg = imagecolorat($img, 10, 10); // get top-left corner color
imagecolortransparent($img, $bg);
imagepng($img, 'public/images/heavenbed_logo_transparent.png');
echo "Done!";
