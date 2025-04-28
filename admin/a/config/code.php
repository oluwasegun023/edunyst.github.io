<?php include '../../../config/config.php';?>
<?php include 'session_validation.php';?>

<?php
$action=$_POST['action'];

switch ($action){

	case 'logout':
		session_destroy();
        ?>
      <script>
            window.parent(location="../../../admin/");
      </script>
      <?php
  	break; 

	case 'get_page':
		$page=$_POST['page'];
		include '../content/page-content.php';
	break;

	case '_get_page_with_id':
		$page=$_POST['page'];
		$ids=$_POST['ids'];
		$other_ids=$_POST['other_ids'];
		$other_ids1=$_POST['other_ids1'];
		include '../content/page-content.php';
	break;

	case 'get_form':
		$page=$_POST['page'];
		include '../content/form.php';
	break;

	case 'get_form_with_id':
		$page=$_POST['page'];
		$ids=$_POST['ids'];
		$other_ids=$_POST['other_ids'];
		$other_ids1=$_POST['other_ids1'];
		include '../content/form.php';
	break;

	case 'get_details':
		$ids=$_POST['ids'];
		$name=$_POST['name'];
		$status_name=$_POST['status_name'];
	
		$page=$_POST['page'];
		include '../content/form.php';
	break;
	
	
	case 'unlink_passport':
		$db_passport=$_POST['db_passport'];

		if($db_passport=='friends.png'){
			/// do nothing
		}else{
		 unlink("../../../uploaded_files/staff_pix/".$db_passport);
		}
		
	break;

	case 'upload_pix_file':
		$passport=$_POST['passport'];
		move_uploaded_file($_FILES["passport"]["tmp_name"], "../../../uploaded_files/staff_pix/".$passport);
	break;

	case 'upload_subject_pix':
		$subject_picture=$_POST['subject_picture'];
		$old_passport=$_POST['old_passport'];
		
		if($old_passport=='default_pix.jpg'){
			/// do nothing
		}else{
		unlink("../../../uploaded_files/subject_pix/".$old_passport);
		}

		$allowedExts = array("jpg", "jpeg", "JPEG", "JPG", "gif", "png", "webp");
		$extension = pathinfo($subject_picture, PATHINFO_EXTENSION);
		if (in_array($extension, $allowedExts)){				 //////////array 
			move_uploaded_file($_FILES["subject_picture"]["tmp_name"], "../../../uploaded_files/subject_pix/".$subject_picture);
		}
	break;

	case 'upload_exam_pix':
		$exam_logo=$_POST['exam_logo'];
		$old_passport=$_POST['old_passport'];
		
		if($old_passport=='default_pix.jpg'){
			/// do nothing
		}else{
		unlink("../../../uploaded_files/exam_pix/".$old_passport);
		}

		$allowedExts = array("jpg", "jpeg", "JPEG", "JPG", "gif", "png", "PNG", "webp");
		$extension = pathinfo($exam_logo, PATHINFO_EXTENSION);
		if (in_array($extension, $allowedExts)){				 //////////array 
			move_uploaded_file($_FILES["exam_logo"]["tmp_name"], "../../../uploaded_files/exam_pix/".$exam_logo);
		}
	break;

	case 'upload_sub_topic_pix':
		$sub_topic_logo=$_POST['sub_topic_logo'];
		$old_sub_topic_passport=$_POST['old_sub_topic_passport'];
		
		if($old_sub_topic_passport=='default_pix.jpg'){
			/// do nothing
		}else{
		unlink("../../../uploaded_files/sub_topic_pix/".$old_sub_topic_passport);
		}

		$allowedExts = array("jpg", "jpeg", "JPEG", "JPG", "gif", "png", "PNG", "webp");
		$extension = pathinfo($sub_topic_logo, PATHINFO_EXTENSION);
		if (in_array($extension, $allowedExts)){				 //////////array 
			move_uploaded_file($_FILES["sub_topic_logo"]["tmp_name"], "../../../uploaded_files/sub_topic_pix/".$sub_topic_logo);
		}

	break;

	case 'upload_video_pix':
		$video_logo=$_POST['video_logo'];
		$old_video_passport=$_POST['old_video_passport'];

		if($old_video_passport=='default_pix.jpg'){
			/// do nothing
		}else{
		unlink("../../../uploaded_files/sub_topic_video_pix/".$old_video_passport);
		}

		$allowedExts = array("jpg", "jpeg", "JPEG", "JPG", "gif", "png", "PNG", "webp");
		$extension = pathinfo($video_logo, PATHINFO_EXTENSION);
		if (in_array($extension, $allowedExts)){				 //////////array 
			move_uploaded_file($_FILES["video_logo"]["tmp_name"], "../../../uploaded_files/sub_topic_video_pix/".$video_logo);
		}

	break;

	
	case 'upload_sub_topic_video':

		$video= $_POST['video'];
		
		$old_video= $_POST['old_video'];

		unlink("../../../uploaded_files/videos/".$old_video);

		$allowedExts = array("avi", "flv", "wmv", "mov", "mp4");
		$extension = pathinfo($_FILES['video']['name'], PATHINFO_EXTENSION);
		if (in_array($extension, $allowedExts)){				  
		  move_uploaded_file($_FILES["video"]["tmp_name"], "../../../uploaded_files/videos/".$video);
		 $tempname = $_FILES["video"]["tmp_name"];
		}
	
	break;

	case 'upload_blog_pix':
		$blog_photo= $_POST['blog_photo'];
		$old_blog_pix= $_POST['old_blog_pix'];

		if($old_blog_pix=='default_pix.jpg'){
			/// do nothing
		}else{
		unlink("../../../uploaded_files/blog_pix/".$old_blog_pix);
		}
		
		$allowedExts = array("jpg", "jpeg", "JPEG", "JPG", "gif", "png", "PNG", "webp");
		$extension = pathinfo($blog_photo, PATHINFO_EXTENSION);
		if (in_array($extension, $allowedExts)){				 //////////array 
			move_uploaded_file($_FILES["blog_photo"]["tmp_name"], "../../../uploaded_files/blog_pix/".$blog_photo);
		}
	
	break;

	case 'create_exam_folder':
		$exam_url=trim(strtolower($_POST['exam_url']));
		$exam_id=trim(strtoupper($_POST['exam_id']));
	
		///////////////////////create new exam folder//////////////////
		mkdir('../../../exams/'.$exam_url);
	
		$all_subject_id=$_POST['all_subject_id'];
		$all_subject_urls= trim(strtolower($_POST['all_subject_urls']));
		
		$each_subject_id = explode(',', rtrim($all_subject_id, ","));
		$each_subject_urls = explode(',',$all_subject_urls);
			$no=0;
		foreach($each_subject_urls as $subject_url){
			$no++;	
			$subject_id=$each_subject_id[$no-1];

		///////////////////////create update subject folders//////////////////
		mkdir('../../../exams/'.$exam_url.'/'.$subject_url);
		$myfile = fopen("../../../exams/".$exam_url.'/'.$subject_url."/index.php", "w") or die("Unable to open file!");
		$txt = "<?php include '../../../config/config.php';?>\n";
		$txt .= "<?php ".strval('$subject_id')."='$subject_id';?>\n";
		$txt .= "<?php ".strval('$exam_id')."='$exam_id';?>\n";
		$txt .= "<?php include "."'../../subject-content-detail.php';?>";
		fwrite($myfile, $txt);
		fclose($myfile);
		}

		$myfile = fopen("../../../exams/".$exam_url."/index.php", "w") or die("Unable to open file!");
		$txt = "<?php include '../../config/config.php';?>\n";
		$txt .= "<?php ".strval('$exam_id')."='$exam_id';?>\n";
		$txt .= "<?php include "."'../exam-content-detail.php';?>";
		fwrite($myfile, $txt);
		fclose($myfile);

	break;
	
	
	case 'update_exam_folder':
		$exam_url=trim(strtolower($_POST['exam_url']));
		$db_exam_url=$_POST['db_exam_url'];
		$exam_id=trim(strtoupper($_POST['exam_id']));
		///////////////////////rename exam folder//////////////////
		rename("../../../exams/$db_exam_url", "../../../exams/$exam_url");


		mkdir('../../../exams/'.$exam_url);
		
		$all_subject_id = $_POST['all_subject_id'];
		$all_subject_urls = strtolower(trim($_POST['all_subject_urls']));
		
		$each_subject_id = explode(',', rtrim($all_subject_id, ","));
		$each_subject_urls = explode(',', $all_subject_urls);

		
		foreach($each_subject_urls as $subject_url){
			$no++;	
			$subject_id=$each_subject_id[$no-1];

		///////////////////////recreate update subject folders//////////////////
		mkdir('../../../exams/'.$exam_url.'/'.$subject_url);
		$myfile = fopen("../../../exams/".$exam_url.'/'.$subject_url."/index.php", "w") or die("Unable to open file!");
		$txt = "<?php include '../../../config/config.php';?>\n";
		$txt .= "<?php ".strval('$subject_id')."='$subject_id';?>\n";
		$txt .= "<?php ".strval('$exam_id')."='$exam_id';?>\n";
		$txt .= "<?php include "."'../../subject-content-detail.php';?>";
		fwrite($myfile, $txt);
		fclose($myfile);

		}

		$myfile = fopen("../../../exams/".$exam_url."/index.php", "w") or die("Unable to open file!");
		$txt = "<?php include '../../config/config.php';?>\n";
		$txt .= "<?php ".strval('$exam_id')."='$exam_id';?>\n";
		$txt .= "<?php include "."'../exam-content-detail.php';?>";
		fwrite($myfile, $txt);
		fclose($myfile);
	break;

	case 'create_sub_topic_folder':
		$exam_url=trim(strtolower($_POST['exam_url']));
		$subject_url= trim(strtolower($_POST['subject_url']));
		$sub_topic_url=trim(strtolower($_POST['sub_topic_url']));
		$sub_topic_id=trim(strtoupper($_POST['sub_topic_id']));
		$topic_id=trim(strtoupper($_POST['topic_id']));

	///////////////////////create new sub topic folder//////////////////
		mkdir('../../../exams/'.$exam_url.'/'.$subject_url.'/'.$sub_topic_url);
		
		$myfile = fopen("../../../exams/".$exam_url.'/'.$subject_url.'/'.$sub_topic_url."/index.php", "w") or die("Unable to open file!");
		$txt = "<?php include '../../../../config/config.php';?>\n";
		$txt .= "<?php ".strval('$sub_topic_id')."='$sub_topic_id';?>\n";
		$txt .= "<?php ".strval('$topic_id')."='$topic_id';?>\n";
		$txt .= "<?php include "."'../../../sub-topic-content-detail.php';?>";
		fwrite($myfile, $txt);
		fclose($myfile);

	break;

	case 'update_sub_topic_folder':
		$exam_url=trim(strtolower($_POST['exam_url']));
		$subject_url= trim(strtolower($_POST['subject_url']));
		$sub_topic_url=trim(strtolower($_POST['sub_topic_url']));
		$sub_topic_id=trim(strtoupper($_POST['sub_topic_id']));
		$topic_id=trim(strtoupper($_POST['topic_id']));

		$db_sub_topic_url=$_POST['db_sub_topic_url'];
		
		///////////////////////rename sub topic folder//////////////////
		rename("../../../exams/$exam_url/$subject_url/$db_sub_topic_url", "../../../exams/$exam_url/$subject_url/$sub_topic_url");
	
	///////////////////////recreate sub topic folder//////////////////
		mkdir('../../../exams/'.$exam_url.'/'.$subject_url.'/'.$sub_topic_url);
		$myfile = fopen("../../../exams/".$exam_url.'/'.$subject_url.'/'.$sub_topic_url."/index.php", "w") or die("Unable to open file!");
		$txt = "<?php include '../../../../config/config.php';?>\n";
		$txt .= "<?php ".strval('$sub_topic_id')."='$sub_topic_id';?>\n";
		$txt .= "<?php ".strval('$topic_id')."='$topic_id';?>\n";
		$txt .= "<?php include "."'../../../sub-topic-content-detail.php';?>";
		fwrite($myfile, $txt);
		fclose($myfile);

	break;

	case 'create_blog_folder':
		$blog_url=trim(strtolower($_POST['blog_url']));
		$blog_id=trim(strtoupper($_POST['blog_id']));
	     
	///////////////////////create new blog topic folder//////////////////
		mkdir('../../../blog/'.$blog_url);
		
		$myfile = fopen("../../../blog/".$blog_url."/index.php", "w") or die("Unable to open file!");
		$txt = "<?php include '../../config/config.php';?>\n";
		$txt .= "<?php ".strval('$blog_id')."='$blog_id';?>\n";
		$txt .= "<?php include "."'../blog-content-detail.php';?>";
		fwrite($myfile, $txt);
		fclose($myfile);

	break;

	case 'update_blog_folder':
		$blog_url=trim(strtolower($_POST['blog_url']));
		$blog_id=trim(strtoupper($_POST['blog_id']));
		
		$db_blog_url=$_POST['db_blog_url'];

		///////////////////////rename blog folder//////////////////
		rename("../../../blog/$db_blog_url", "../../../blog/$blog_url");
	
	///////////////////////recreate blog folder//////////////////
		mkdir('../../../blog/'.$blog_url);
		$myfile = fopen("../../../blog/".$blog_url."/index.php", "w") or die("Unable to open file!");
		$txt = "<?php include '../../config/config.php';?>\n";
		$txt .= "<?php ".strval('$blog_id')."='$blog_id';?>\n";
		$txt .= "<?php include "."'../blog-content-detail.php';?>";
		fwrite($myfile, $txt);
		fclose($myfile);

	break;

}
?>