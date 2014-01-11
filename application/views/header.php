<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="description" content="Brandan Majeske's Portfolio Website">
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>Brandan Majeske &bull; Web Designer &amp; Developer</title>
	<link rel="stylesheet" href="<?php echo base_url(); ?>styles/screen.css"/>
	<script src="<?php echo base_url(); ?>js/modernizr.js"></script>
</head>
<body>

<div class="overlay"><img src="<?php echo base_url(); ?>images/loading.svg"></div>

<div class="navigation hide-for-small-only">
<div class="row">
<div class="larg-12 columns">
	<ul class="home-btn"><li><a href="<?php echo base_url(); ?>"><img src="<?php echo base_url(); ?>images/homebtn.svg" /></a></li></ul>
	<ul class="nav-links">
		<li><a href="work">work</a></li>
		<li><a href="about">about</a></li>
		<li><a href="http://blog.brandanmajeske.com" target="_blank">blog</a></li>
		<li><a href="contact">contact</a></li>
	</ul>
</div>
</div>
</div>

<div class="navigation show-for-small-only">
<div class="row">
<div class="larg-12 columns">
	<ul class="home-btn"><li><a href="<?php echo base_url(); ?>"><img src="<?php echo base_url(); ?>images/homebtn.svg" /></a></li></ul>
	<a id="mobile-nav-toggle" href="#" class="menu-icon" ><span></span></a>
</div>
	<ul class="mobile-nav-links">
		<li><a href="work">work</a></li>
		<li><a href="about">about</a></li>
		<li><a href="#">blog</a></li>
		<li><a href="contact">contact</a></li>
	</ul>

</div>
</div>