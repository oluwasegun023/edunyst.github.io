<?php include '../config/connection.php';?>

<?php
if($login_staff_id!=''){
?>
    <script>
	window.parent(location="a/");
	</script>
<?php }?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http: //www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<?php include 'meta.php'?>
<title><?php echo $thename?>  | Adminstrative Login</title>
<meta name="keywords" content="Adminstrative Login - <?php echo $thename?>" />
<meta name="description" content="Adminstrative Login <?php echo $thename?>"/>
</head>
<body>
<?php  include 'alert.php'?>

    <section class="login-section">

        <div class="div-in">

                <div class="log-in-div">
                    <div class="form-div animated fadeInRight" >
                            <div class="logo-div"><img src="<?php echo $website_url?>/all-images/images/logo.png" alt="Logo"></div>
                           
                         
        
                            <h1 id="page-title">LOG-IN</h1>
                           
                          <div  id="more-info">
                            <?php $page='login';?>
                            <?php include 'config/page-content.php';?>
                        </div>
                    </div>

                </div>


                <div class="side-in-div animated fadeInLeft">
                        <div class="side-text">
                            <h1>Adminstrative Portal</h1>
                            <p>Access high-quality education from anywhere, at any time. Explore a wide range of subjects and courses delivered through virtual platforms on SSCE, GCE, NABTEB.</p>
                           <ul class="social-link">
                                <li class="Facebook" title="Facebook">Facebook</li>
                                <li class="Twitter" title="Twitter">Twitter</li>
                                <li class="Google" title="Google">Google</li>
                            </ul>
                        </div>
                    
                </div>





        </div>

    </section>
       


<script type="text/javascript" src="js/scrollBar.js"></script>
<script type="text/javascript">$(".sb-container").scrollBox();</script>
</body>
</html>


