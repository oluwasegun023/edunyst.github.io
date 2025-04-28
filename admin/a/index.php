
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http: //www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<?php include '../../config/config.php';?>
<?php include 'config/session_validation.php';?>

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
<?php include 'meta.php'?>
<title>Administrative Portal | <?php echo $thename;?></title>
</head>
<body>
   
<?php include 'header.php'?>
<?php  include 'alert.php'?>
<?php include 'side-bar.php'?>


<div class="content-div">
    <?php $callclass->_admin_title_info();?>

    
    
    <div id="page-content">
		<?php $page='dashboard';?>
        <?php require_once 'content/page-content.php'?>
    </div>

      
    <div class="side-div-right">
        <div class="inner-right">

         
            <div class="alert-dashboard-div animated ZoomIn">
                <div class="alert-dashboard-title"><i class="bi-bell"></i> Recent Activities <span class="right">See All</span></div>
                <div class="system-alert dashboard-system-alert" id="<?php echo $alert_id; ?>" onclick="_read_alert('<?php echo $alert_id; ?>')">
                    <div class="alert-name"><i class="bi-person"></i> Afolabi Taiwo <span id="<?php echo $alert_id; ?>viewed"><i class="bi-check"></i></span></div>
                    <div class="alert-text">Success Alert: EMMANUEL SAMUEL profile was updated successfully...</div>
                    <div class="alert-time"><i class="bi-clock"></i> <span>2023-07-09 15:31:34</span></div>
                </div>

                <div class="system-alert dashboard-system-alert" id="<?php echo $alert_id; ?>" onclick="_read_alert('<?php echo $alert_id; ?>')">
                    <div class="alert-name"><i class="bi-person"></i> Afolabi Taiwo <span id="<?php echo $alert_id; ?>viewed"><i class="bi-check"></i></span></div>
                    <div class="alert-text">Success Alert: EMMANUEL SAMUEL profile was updated successfully...</div>
                    <div class="alert-time"><i class="bi-clock"></i> <span>2023-07-09 15:31:34</span></div>
                </div> 

                <div class="system-alert dashboard-system-alert" id="<?php echo $alert_id; ?>" onclick="_read_alert('<?php echo $alert_id; ?>')">
                    <div class="alert-name"><i class="bi-person"></i> Afolabi Taiwo <span id="<?php echo $alert_id; ?>viewed"><i class="bi-check"></i></span></div>
                    <div class="alert-text">Success Alert: EMMANUEL SAMUEL profile was updated successfully...</div>
                    <div class="alert-time"><i class="bi-clock"></i> <span>2023-07-09 15:31:34</span></div>
                </div> 

                <div class="system-alert dashboard-system-alert" id="<?php echo $alert_id; ?>" onclick="_read_alert('<?php echo $alert_id; ?>')">
                    <div class="alert-name"><i class="bi-person"></i> Afolabi Taiwo <span id="<?php echo $alert_id; ?>viewed"><i class="bi-check"></i></span></div>
                    <div class="alert-text">Success Alert: EMMANUEL SAMUEL profile was updated successfully...</div>
                    <div class="alert-time"><i class="bi-clock"></i> <span>2023-07-09 15:31:34</span></div>
                </div> 

                <div class="system-alert dashboard-system-alert" id="<?php echo $alert_id; ?>" onclick="_read_alert('<?php echo $alert_id; ?>')">
                    <div class="alert-name"><i class="bi-person"></i> Afolabi Taiwo <span id="<?php echo $alert_id; ?>viewed"><i class="bi-check"></i></span></div>
                    <div class="alert-text">Success Alert: EMMANUEL SAMUEL profile was updated successfully...</div>
                    <div class="alert-time"><i class="bi-clock"></i> <span>2023-07-09 15:31:34</span></div>
                </div>


            </div>


        </div>
    
    </div>
      
</div>
<script type="text/javascript" src="js/scrollBar.js"></script>
<script type="text/javascript">$(".sb-container").scrollBox();</script>
  


</body>
</html>
