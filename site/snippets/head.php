<!doctype html>
<html class="no-js" lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <title><?php echo $site->title()->html() ?> | <?php echo $page->title()->html() ?></title>
  <meta name="description" content="<?php echo $site->description()->html() ?>">
  <meta name="keywords" content="<?php echo $site->keywords()->html() ?>">

  <link rel="icon" type="image/png" href="/assets/images/favicon.png" />

  <?= css('assets/css/app.min.css') ?>
  <?= css('assets/css/vendors.min.css') ?>

</head>
<body class="<?php echo $page->title()->lower()->html() ?>">

	<div class="isMobile"></div>
	
  <div id="loader">
    <div class="animHalf topHalf"></div>
    <div class="vertical-center">
     <!-- <p>Loading <span>.</span><span>.</span><span>.</span> </p> -->
     <div class="spinnerDad"><div class="spinner"></div></div>
    </div> 
    <div class="animHalf bottomHalf"></div>

  </div>

