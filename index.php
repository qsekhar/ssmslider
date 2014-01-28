<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Slider</title>
<script src="js/jq.js"></script>
<script src="js/ssmslider.js"></script>
<script>
$(document).ready(function(e) {
    $( '#silder' ).ssmSlider({
		'animationType' : 'slide',
		/*'width' : '100%',
		'height' : 'auto',*/
		'tickTock' : 4000,
	});
});
</script>
<style>
.sliderWrapper{ width:50%; height:100%; overflow:hidden; position:absolute; left:20%; top:0;}
</style>
</head>
<?php 
$imgArr = glob( 'images/*.*' );
?>
<body>

<div class="sliderWrapper">
    <div id="silder">
        <?php foreach( $imgArr as $imgpath  ) : ?>
        <div class="content">
            <img src="<?php echo $imgpath ?>" />
        </div>
        <?php endforeach; ?>
    </div>
</div>
</body>
</html>