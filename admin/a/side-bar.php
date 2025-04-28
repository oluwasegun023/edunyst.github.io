

<!-- <div class="side-nav-div animated fadeInLeft animated animated">
                    <ul class="side-bar-link">
					<li class="active-li" id="dashboard" onclick="_get_page('dashboard')"><i class="bi-speedometer2 li"></i> </li>
                    <li id="adminstrator" onclick="_get_page('view_all_staff')"><i class="bi-people-fill li"></i>
						<ul class="sub-li">
							<li>Adminstrator</li>
						</ul>
					
					</li>
                        <li><i class="bi-person-fill-add li"></i></li>
                        <li><i class="bi-pencil-square li"></i> </li>
                        <li><i class="bi-book li"></i> </li>
                        <li class="publish" onclick="_log_out('log-out')"><i class="bi-newspaper li"></i> </li>
                        <li><i class="bi-play li"></i> </li>
                        <li><i class="bi-newspaper li"></i> </li>
                        <li><i class="bi-question-square li"></i></li>
                        <li><i class="bi-gear li"></i> </li>
                        <li><i class="bi-box-arrow-right li"></i> </li>






						<li class="active-li" id="dashboard" onclick="_get_page('dashboard')"><i class="bi-speedometer2 li"></i> Dashboard</li>
                        <li id="adminstrator" onclick="_get_page('view_all_staff')"><i class="bi-people-fill li"></i> Adminstrator</li>
                        <li><i class="bi-person-fill-add li"></i> Active Users</li>
                        <li><i class="bi-pencil-square li"></i> Exams</li>
                        <li><i class="bi-book li"></i> Subject</li>
                        <li class="publish" onclick="_log_out('log-out')"><i class="bi-newspaper li"></i> Publish</li>
                       <li><i class="bi-play li"></i> Video</li>
                        <li><i class="bi-newspaper li"></i> Blog</li>
                        <li><i class="bi-question-square li"></i> FAQ's</li>
                        <li><i class="bi-gear li"></i> Settings</li>
                        <li><i class="bi-box-arrow-right li"></i> Log-Out</li> 
                        </ul>

    
</div>  -->



























<div class="side-nav-div animated fadeInLeft animated animated">
	<div class="side-in-div">

	
	<div class="nav-div active-li" onClick="_get_page('dashboard', 'dashboard')" id="dashboard">
    	<div class="icon"><i class="bi-speedometer2"></i></div> Dashboard
        <div class="hidden" id="_dashboard"><i class="bi-speedometer2"></i> Admin Dashboard Overview</div>
    </div>
    
 <?php if($role_id>1){?>
	<div class="nav-div" onClick="_get_page('view_staff', 'admin')" id="admin">
    	<div class="icon"><i class="bi-people-fill"></i></div> Staff
        <div class="hidden" id="_admin"><i class="bi-people-fill"></i> Staff / Adminstrator</div>
    </div>
 <?php }?>


	<div class="nav-div" onClick="_get_page('active_users', 'user')" id="user">
    	<div class="icon"><i class="bi-people-fill"></i></div> Users
        <div class="hidden" id="_user"><i class="bi-people-fill"></i> Active Users</div>
    </div>
    

 	<div class="nav-div" onClick="_get_page('all_subject', 'subject')" id="subject">
    	<div class="icon"><i class="bi-book"></i></div> Subject
        <div class="hidden" id="_subject"><i class="bi-book"></i> All Subjects</div>
    </div>
    
    <div class="nav-div" onClick="_get_page('exam_category', 'exam')" id="exam">
    	<div class="icon" ><i class="bi-pencil-square"></i></div> Exams
        <div class="hidden" id="_exam"><i class="bi-pencil-square"></i> Exams Categories</div>
    </div>

	<div class="nav-div" onClick="_get_page('blogs', 'blogs')" id="blogs">
    	<div class="icon"><i class="bi-newspaper"></i></div> Blog
        <div class="hidden" id="_blogs"><i class="bi-newspaper"></i> Blogs</div>
    </div>
    

	<div class="nav-div" onClick="_get_page('faqs', 'faqs')" id="faqs">
    	<div class="icon"><i class="bi-question-square"></i></div> FAQ's
        <div class="hidden" id="_faqs"><i class="bi-newspaper"></i> FAQ's</div>
    </div>
   
	<div class="nav-div" onClick="_get_form('app_settings')">
    	<div class="icon"><i class="bi-gear"></i></div> Settings
    </div>

   
	</div>
    
</div> 