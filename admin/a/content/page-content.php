
<?php if ($page=='access_key_authentication'){?>
	<div class="caption-div caption-success-div animated zoomIn">
        <div class="div-in animated fadeInRight">
				<div class="img"><img src="all-images/images/warning.gif" /></div>
            <h2>INVALID ACCESS KEY</h2>
            
            <a href="wallet" title="My Wallet">
             <button class="btn" type="button"><i class="fa fa-eye"></i> Go to My Wallet </button></a>
        </div>
    </div>
<?php } ?>

<?php if ($page=='dashboard'){?>
        <div class="statistics-back-div" >
            <?php if($role_id>1){?>
            <div class="statistics-div bg1" onClick="_get_page('view_staff', 'admin')" id="admin">
                <div class="inner-div">                    
                Adminstrator <br>
                    <span class="number" id="total_active_staff"></span>
                </div>
            </div>
           
            <?php }?>

            <div class="statistics-div bg2" onClick="_get_page('active_users', 'user')" id="user">
                <div class="inner-div">                    
                    Active Users <br>
                    <span class="number" id="total_active_user"></span>
                </div>
            </div>

            <div class="statistics-div bg3" onClick="_get_page('exam_category', 'exam')" id="exam">
                <div class="inner-div">
                    Exams <br>
                    <span class="number" id="total_active_exam"></span>
                </div>
            </div>


            <div class="statistics-div bg4"  onClick="_get_page('all_subject', 'subject')" id="subject">
                <div class="inner-div">
                Subject <br>
                    <span class="number" id="total_active_subject"></span>
                </div>
            </div>


            <div class="statistics-div bg5" onClick="_get_page('blogs', 'blogs')" id="blogs">
                <div class="inner-div">
                    Blogs  <br>
                    <span class="number" id="total_active_blog"></span>
                </div>
            </div>

            <div class="statistics-div bg1"  onClick="_get_page('faqs', 'faqs')" id="faqs">
                <div class="inner-div">                    
                FAQ's <br>
                    <span class="number" id="total_active_faq"></span>
                </div>
            </div>

          

            <div class="statistics-div round">
                <div class="inner-div text-centre">
                    View All Activities
                    <div class="icon-div">
                        <i class="bi-arrow-up-right"> </i>
                    </div>
                </div>
            </div>

        </div>
        <div class="chart-back-div">

            <div class="chart-div-notifications" >
                <div class="text"><i class="bi-graph-up-arrow"></i> Showing Matrix for</div> 
                

                <div class="text">
                    <div class="custom-srch-div">
                        <input id="datepicker-from" type="text" class="srchtxt" placeholder="From" title="Select Date From" />
                        <input id="datepicker-to" type="text" class="srchtxt" placeholder="To" title="Select Date To"/>
                        <button type="button" class="btn" onclick=" _fetch_custom_dashboard_report('dashboard_report','custom_search')">Apply</button>
                    </div>
                </div>

                    <div class="text text-right" onclick="select_search()">
                        <span id="srch-text">Last 30 Days</span>&nbsp;<i class="fa fa-sort-down (alias)"></i>
                        <div class="srch-select">
                        <div id="srch-today" onclick="get_dashboard_report('srch-today', 'view_today_search');">Today</div>
                        <div id="srch-week" onclick="get_dashboard_report('srch-week', 'view_thisweek_search');">This Week</div>
                        <div id="srch-7" onclick="get_dashboard_report('srch-7', 'view_7days_search');">Last 7 Days</div>
                        <div id="srch-month" onclick="get_dashboard_report('srch-month', 'view_thismonth_search');">This Month</div>
                        <div id="srch-30" onclick="get_dashboard_report('srch-30', 'view_30days_search');">Last 30 Days</div>
                        <div id="srch-90" onclick="get_dashboard_report('srch-90', 'view_90days_search');">Last 90 Days</div>
                        <div id="srch-year" onclick="get_dashboard_report('srch-year', 'view_thisyear_search');">This Year</div>
                        <div id="srch-1year" onclick="get_dashboard_report('srch-1year', 'view_1year_search');">Last 1 Year</div>
                        <div onclick="srch_custom('Custom Search')">Custom Search</div>
                    </div>
                    <div class="icon-div"><i class="bi-caret-down"></i></div>
                </div>
            
                <br clear="all" />
            </div>
    
        <!-- <div class="chart-div">
            <div id="chart-report-div">
                <div class="ajax-loader"><img src="all-images/images/ajax-loader.gif"/></div>
            </div>
        </div> -->

        <!-- <script language="javascript">
            $('#datepicker-from').datetimepicker({
            lang:'en',
            timepicker:false,
            format:'Y-m-d',
            autoclose: true,
            todayHighlight: true,

            });

            $('#datepicker-to').datetimepicker({
            lang:'en',
            timepicker:false,
            format:'Y-m-d',
            autoclose: true,
            todayHighlight: true,
            });
        </script> -->

<div class="chart-div">
                <div class="chart" >
                    <div class="rev-report">Revenue for <span id="day30">XXX</span> - <span id="today">XXX</span><br /><div class="revenue">₦<span id="revenue">0.00</span> </div></div>
                    <!-- <div id="chart-report-div">  <div class="ajax-loader "><img src="all-images/images/ajax-loader.gif"/></div></div> -->
                    <div id="chartContainer" style="width:100%; height:250px; margin:auto;"></div>
                 
                                <!-- <script>
                                        $(document).ready(function() {
                                        var chart = new CanvasJS.Chart("chartContainer", {
                                            animationEnabled: true,
                                            title:{
                                                text: " "
                                            },
                                            axisX:{
                                                valueFormatString: "DD MMM",
                                                crosshair: {
                                                    enabled: true,
                                                    snapToDataPoint: true
                                                }
                                            },
                                            axisY: {
                                                // title: " ",
                                                includeZero: false,
                                                valueFormatString: "N##0.00",
                                                crosshair: {
                                                    enabled: true,
                                                    snapToDataPoint: true,
                                                    labelFormatter: function(e) {
                                                        return "N" + CanvasJS.formatNumber(e.value, "##0.00");
                                                    }
                                                }
                                            },
                                                    
                                            data: [{
                                                type: "line",
                                                xValueFormatString: "DD MMM",
                                                yValueFormatString: "N##0.00",

                                                dataPoints: [   
                                                    <?php echo $dataset ?>
                                                    { x:  new Date(2020, 01, 05), y: 1000 },
                                                    { x: new Date(2020, 02, 05), y: 4000 },
                                                    { x: new Date(2020, 03, 05), y: 2000 },
                                                    { x: new Date(2020, 04, 05), y: 6000 },
                                                    { x: new Date(2020, 05, 05), y: 9000 },
                                                    { x: new Date(2020, 06, 05), y: 5000 }   
                                                ]
                                            }]
                                            
                                        });
                                        chart.render();
                                        })
                                </script> -->
                    </div>
             </div>

  </div>
<script>_get_dashboard_count();</script> 
<script>_get_staff_login('<?php echo $login_staff_id?>');</script>

<?php }?>




<?php if ($page=='system_alert'){ ?>   
    <div class="search-div">
        <!--------------------------------network search select------------------------->
        <select id="status_id" class="text_field select" onchange="_get_fetch_all_staff()">
            <option value=""> SELECT STATUS</option>
            <script>_get_select_status('status_id','1,2');</script>
        </select>
        <!--------------------------------all search select------------------------->
        <input id="search_txt" onkeyup="_get_fetch_all_staff();" type="text" class="text_field utext" placeholder="Type here to search..." title="Type here to search" />
    </div>
<?php }?>






<?php if ($page=='view_staff'){?>
    <div class="search-div">
        <!--------------------------------network search select------------------------->
        <select id="status_id" class="text_field select" onchange="_get_fetch_all_staff()">
            <option value=""> SELECT STATUS</option>
            <script>_get_select_status('status_id','1,2');</script>
        </select>
        <!--------------------------------all search select------------------------->
        <input id="search_txt" onkeyup="_get_fetch_all_staff();" type="text" class="text_field utext" placeholder="Type here to search..." title="Type here to search" />
    </div>
    
    <div class="alert alert-success"> <span><i class="bi-people-fill"></i></span> ADMINISTRATOR'S LIST <button class="btn" onClick="_get_form('staff_reg')"><i class="bi-plus-square"></i> CREATE A NEW ADMIN</button></div>
       
        <div class="fetch-div animated fadeIn">			
            <div class="fetch" id="fetch">
                <script> _get_fetch_all_staff('');</script>
            </div>
        </div> 
        <br clear="all" />

     <script>
        superplaceholder({el: search_txt,
            sentences: ['Type here to search...', 'Staff ID e.g STF000765976964','Mobile number e.g 09021947874','E-mail e.g afootechglobal@gmail.com'],
            options: {
            letterDelay: 80,
            loop: true,
            startOnFocus: false
        }
    });
    </script>

<?php } ?>







 



<?php if ($page=='active_users'){ ?>
    <div class="search-div">
        <!--------------------------------network search select------------------------->
        <select id="status_id"  class="text_field select" onchange="_get_fetch_all_user()">
            <option value="">ALL USER STATUS</option>
            <script>_get_select_status('status_id','1,2');</script>
        </select>
        <!--------------------------------all search select------------------------->
        <input id="search_txt" onkeyup="_get_fetch_all_user();" type="text" class="text_field utext" placeholder="Type here to search..." title="Type here to search" />
    </div>

    <div class="alert alert-success"> <span><i class="bi-people-fill"></i></span> USER'S LIST</div>
        
        <div class="fetch-div animated fadeIn">			
            <div class="fetch" id="fetch_user">
                <script> _get_fetch_all_user('');</script>
            </div>
        </div> 
        <br clear="all" />
        
     <script>
        superplaceholder({el: search_txt,
            sentences: ['Type here to search...', 'User ID e.g STF000765976964','Mobile number e.g 09021947874','E-mail e.g afootechglobal@gmail.com'],
            options: {
            letterDelay: 80,
            loop: true,
            startOnFocus: false
        }
    });
    </script>
  
<?php } ?>






<?php if ($page=='all_subject'){ ?>
    <div class="search-div">
        <!--------------------------------network search select------------------------->
        <select id="status_id"  class="text_field select" onchange="_get_fetch_all_subject('fetch_subject')">
            <option value="">ALL SUBJECT STATUS</option>  
            <script>_get_select_status('status_id','1,2');</script>   
        </select>
        <!--------------------------------all search select------------------------->
        <input id="search_txt" onkeyup="_get_fetch_all_subject('fetch_subject');" type="text" class="text_field utext" placeholder="Type here to search..." title="Type here to search" />
    </div>
        <div class="alert alert-success"> <span><i class="bi-book"></i></span> SUBJECT'S LIST <button class="btn" onClick="_get_form_with_id('add_and_update_subject', '')"><i class="bi-plus-square"></i> ADD NEW SUBJECT</button></div>
        
        <div class="fetch-div animated fadeIn">			
            <div class="fetch" id="fetch_subject">
                <script> _get_fetch_all_subject('fetch_subject');</script>
            </div>
        </div> 
        <br clear="all" />

     <script>
        superplaceholder({el: search_txt,
            sentences: ['Type here to search...', 'Subject ID e.g SUB00000','Subject Name e.g Maths, English, Physics'],
            options: {
            letterDelay: 80,
            loop: true,
            startOnFocus: false
        }
    });
    </script>
 
<?php } ?>








<?php if ($page=='exam_category'){ ?>
    <div class="search-div">
        <!--------------------------------network search select------------------------->
        <select id="status_id"  class="text_field select" onchange="_get_fetch_all_exam()">
            <option value="">ALL EXAM STATUS</option>   
             <script>_get_select_status('status_id','1,2');</script>   
        </select>
        <!--------------------------------all search select------------------------->
        <input id="search_txt" onkeyup="_get_fetch_all_exam()" type="text" class="text_field utext" placeholder="Type here to search..." title="Type here to search" />
    </div>
        <div class="alert alert-success"> <span><i class="bi-pencil-square"></i></span> EXAM'S LIST <button class="btn" onClick="_get_form_with_id('add_and_update_exam', '')"><i class="bi-plus-square"></i> CREATE A NEW EXAM</button></div>
		
        <div class="fetch-div animated fadeIn">			
            <div class="fetch" id="fetch_exam">
                <script> _get_fetch_all_exam();</script>
            </div>
        </div> 
        <br clear="all" />

        <!-- <div class="record-content-div">
            <div class="div-in">
                <div class="image-div">
                    <img src="<?php //echo //$website_url?>/uploaded_files/exam_pix/ssce.png" alt="topics"/>
                </div>

                    <div class="text-div">
                    <h2>WAEC</h2>
                        <p>(WAEC) is an examination board established by law to determine the examinations required in West African countries.</p>
                    <div class="count-div">
                        <div class="count-in"><i class="bi-book"></i> TOPICS: <span id="">100</span> &nbsp;|&nbsp; <i class="bi-book"></i> SUB-TOPICS: <span id="">100</span> &nbsp;|&nbsp; <i class="bi-book"></i> STATUS: <span class="ACTIVE" id="" >ACTIVE</span></div>
                        <button class="btn" title="EDIT"><i class="bi-pencil-square"></i> EDIT</button>
                        <button class="btn btn2" title="EDIT" onClick="_get_page('subject', 'exam')"><i class="bi-pencil-square"></i> VIEW SUBJECT</button>
                    </div>
                </div>
            </div> 
        </div> -->

     <script>
        superplaceholder({el: search_txt,
            sentences: ['Type here to search...', 'Exam ID e.g EXM00000','Exam Name e.g WAEC, NECO, JUPEB, JAMB, UTME, PUTME','IJMB'],
            options: {
            letterDelay: 80,
            loop: true,
            startOnFocus: false
        }
    });
    </script>
   
<?php } ?>







<?php if ($page=='subject'){ ?>
    <div class="search-div">
        <!--------------------------------network search select------------------------->
        <select id="status_id"  class="text_field select" onchange="_get_fetch_exam_subject('<?php echo $ids?>');">
            <option value="">SUBJECT STATUS</option>   
               <script>_get_select_status('status_id','1,2');</script>    
        </select>
        <!--------------------------------all search select------------------------->
        <input id="search_txt" onkeyup="_get_fetch_exam_subject('<?php echo $ids?>');" type="text" class="text_field utext" placeholder="Type here to search..." title="Type here to search" />
    </div>
        <div class="alert alert-success"> <span><i class="bi-book"></i></span> <span class="" onClick="_get_page('exam_category');">EXAM / </span> <span id="exam_abbreviation"></span> / SUBJECT'S LIST </div>
        
        <div class="fetch-div animated fadeIn">			
            <div class="fetch" id="fetch_exam_subject">
                <script> _get_fetch_exam_subject('<?php echo $ids?>');</script>
            </div>
        </div> 
        <br clear="all" />

     <script>
        superplaceholder({el: search_txt,
            sentences: ['Type here to search...', 'Subject ID e.g SUB00000','Subject Name e.g Maths, English, Physics'],
            options: {
            letterDelay: 80,
            loop: true,
            startOnFocus: false
        }
    });
    </script>
   
<?php } ?>








<?php if ($page=='topics'){ ?>
    <div class="search-div">
        <!--------------------------------network search select------------------------->
        <select id="status_id"  class="text_field select" onchange="_get_fetch_topic('','<?php echo $other_ids1?>','<?php echo $other_ids?>');">
            <option value="">TOPICS STATUS</option>
            <script>_get_select_status('status_id','1,2');</script>
        </select>
        <!--------------------------------all search select------------------------->
        <input id="search_txt" onkeyup="_get_fetch_topic('','<?php echo $other_ids1?>','<?php echo $other_ids?>');" type="text" class="text_field utext" placeholder="Type here to search..." title="Type here to search" />
    </div>
        <div class="alert alert-success"> <span><i class="bi-book"></i></span> EXAM / <span id="exam_abbreviation" onClick="_get_page('exam_category');"></span> / <span id="subject_name" onClick="_get_page_with_id('subject','<?php echo $other_ids?>');"></span> / TOPIC'S LIST <button class="btn" title="ADD NEW TOPIC" onClick="_get_form_with_id('topics_reg','','<?php echo $other_ids?>','<?php echo $other_ids1?>')"><i class="bi-plus-square"></i> ADD NEW TOPIC</button></div>
           	
        <div class="fetch-div">	

            <div class="faq-back-div">
                <div class="faq-text-div">
  
                    <div class="fetch" id="fetch_topic">
                        <script> _get_fetch_topic('','<?php echo $other_ids1?>','<?php echo $other_ids?>');</script>
                    </div>
                    
                    <br clear="all" />
                    <!-- <div class="quest-faq-div ">
                        <div class="faq-title-text">
                            <h3>NUMBER & NUMERATION <button class="btn" title="ADD NEW SUB TOPIC" onClick="_get_form_with_id('topics_reg','','<?php //echo $ids?>')"><i class="bi-plus-square"></i> ADD NEW SUB-TOPIC</button> <button class="btn btn-2" title="EDIT TOPIC" onClick="_get_form_with_id('topics_reg','<?php //echo $ids?>','<?php //echo $other_ids?>')"><i class="bi-pencil-square"></i> EDIT</button></h3>
                        </div>
                        
                        <div class="faq-answer-div" onclick="_collapse('faq1')">
                            <span>Sub Topics: </span>&nbsp;&nbsp;<span class="count-div">83443</span> &nbsp;&nbsp;| &nbsp;
                            <span>Status: </span>&nbsp;&nbsp;<span class="count-div status">ACTIVE</span>
                            <div class="expand-div" id="faq1num">&nbsp;<i class="bi-plus"></i>&nbsp;</div>                         
                        </div>

                        <div class="faq-answer-div" id="faq1answer" style="display: none;">  
                            
                        </div>
                    </div> -->
                </div>
            </div>
        </div> 
                    
          
     <script>
        superplaceholder({el: search_txt,
            sentences: ['Type here to search...', 'Top ID e.g TOP00000','Top Name e.g Statistic, Geometry'],
            options: {
            letterDelay: 80,
            loop: true,
            startOnFocus: false
        }
    });
    </script>
 
<?php } ?>




<?php if ($page=='videos'){ ?>
    <div class="search-div">
        <!--------------------------------network search select------------------------->
        <select id="status_id"  class="text_field select" onchange="_get_fetch_sub_topic_video('','<?php echo $other_ids?>','<?php echo $other_ids1?>');">
            <option value="">VIDEO STATUS</option>
            <script>_get_select_status('status_id','1,2');</script>     
        </select>
        <!--------------------------------all search select------------------------->
        <input id="search_txt" onkeyup="_get_fetch_sub_topic_video('','<?php echo $other_ids?>','<?php echo $other_ids1?>');" type="text" class="text_field utext" placeholder="Type here to search..." title="Type here to search" />
    </div>
        <div class="alert alert-success"> <span><i class="bi-book"></i></span> EXAM /<span id="exam_abbreviation" onClick="_get_page('exam_category');"></span> / <span id="v_subject_name"></span> / <span id="v_topic_name"></span> / <span id="v_sub_topic_name"></span> / VIDEOS LIST <button class="btn" title="ADD NEW VIDEO" onClick="_get_form_with_id('video_reg','<?php echo $ids?>','<?php echo $other_ids?>','<?php echo $other_ids1?>')"><i class="bi-plus-square"></i> ADD NEW VIDEO</button></div>
           	
   
        <div class="fetch animated fadeIn" id="fetch_sub_topic_video">		
            <script> _get_fetch_sub_topic_video('','<?php echo $other_ids?>','<?php echo $other_ids1?>');</script>
        </div>
            
            <!-- <div class="topics-content-div">
                <div class="image-div video-img">
                    <img src="<?php //echo $website_url?>/all-images/body-pix/num-bases.jpg" alt="geometry"/>
                </div>

                <div class="text video-text">
                    <h4>Introduction to Number Bases</h4>
                    <p>At the end of the study in this video, students should be able to understand Binary (base-2) which uses only two symbols, 0 and 1. And Octal (base-8) which number base uses eight symbols (0-7). And Hexadecimal (base-16): This number base uses sixteen symbols (0-9 and A-F)</p>
                    <div class="bottom-div"><button class="btn" title="EDIT SUB-TOPIC"><i class="bi-pencil-square"></i> EDIT</button>&nbsp;<span class="volume">VOLUME 1</span> &nbsp;|<span class="volume">FREE</span> &nbsp;|<span class="volume">VIDEO DURATION : 00:05:30</span></div>
                </div>
            </div>  -->
          
     <script>
        superplaceholder({el: search_txt,
            sentences: ['Type here to search...', 'Top ID e.g TOP00000','Top Name e.g Statistic, Geometry'],
            options: {
            letterDelay: 80,
            loop: true,
            startOnFocus: false
        }
    });
    </script>
  
<?php } ?>




<?php if ($page=='blogs'){?>

        <div class="search-div">
            <!--------------------------------network search select------------------------->
            <select id="status_id"  class="text_field select" onchange=" _get_fetch_blog('<?php echo $ids?>');">
                <option value="">ALL BLOG STATUS</option>
                <script>_get_select_status('status_id','1,2');</script>
            </select>
            <!--------------------------------all search select------------------------->
            <input id="search_txt" onkeyup=" _get_fetch_blog('<?php echo $ids?>');" type="text" class="text_field utext" placeholder="Type here to search..." title="Type here to search" />
        </div>
        <div class="alert alert-success"> <span><i class="bi-book"></i></span> BLOG'S LIST <button class="btn" onClick="_get_form('blog_reg')"><i class="bi-plus-square"></i> ADD NEW BLOG</button></div>
        <div class="animated fadeIn" id="search-content"> 
            <div class="fetch-div">			
                    
                <div class="fetch animated fadeIn" id="fetch_blog">
                    <script> _get_fetch_blog('<?php echo $ids?>');</script>
                </div>

                <!-- <div class="blog-div">
                    <div class="btn-div">
                        <button class="btn active-btn" onclick="_get_form_with_id('create_blog_category_list_form','BLOG074')">EDIT DEAL</button>
                        <button class="btn" onclick="_get_form('blog_detail')">EDIT PAGE DETAILS</button>
                        <button class="btn" onclick="_delete_publish('BLOG074')" id="delete-publish-BLOG074"><i class="bi-trash"></i></button>
                        <br clear="all">
                    </div>

                    <div class="status-div">ACTIVATED</div>
                    <div class="img-div"><img src="<?php //echo $website_url?>/uploaded_files/blog_pix/blog1.webp" alt="Blog Name"></div>
                    <div class="text-div">
                        <div class="text-in">
                            <div class="text"><span>ANNOUNCEMENT</span> </div>
                        </div>
                        <h2>Group Of Students Sharing Their Ideas</h2>
                        <div class="text-in">
                            <div class="text">UPDATED ON: <span>24 Apr 2023</span> </div>
                            <div class="text"><span>486</span> VIEWS</div>
                        </div>
                        <br>
                    </div>
                </div> -->
            </div>
            <br clear="all" />
        </div>

    <script>
        superplaceholder({el: search_txt,
            sentences: ['Type here to search...', 'Blog ID e.g BLOG00000','Blog Name e.g Statistic, Geometry'],
            options: {
            letterDelay: 80,
            loop: true,
            startOnFocus: false
        }
    });
    </script>
    <?php } ?>






    <?php if ($page=='faqs'){ ?>
    <div class="search-div">
        <!--------------------------------network search select------------------------->
        <select id="status_id"  class="text_field select" onchange=" _get_fetch_faq('');">
            <option value="" selected="selected">ALL FAQ STATUS</option>   
            <script>_get_select_status('status_id','1,2');</script>
        </select>
        <!--------------------------------all search select------------------------->
        <input id="search_txt" onkeyup=" _get_fetch_faq('');" type="text" class="text_field utext" placeholder="Type here to search..." title="Type here to search" />
    </div>
        <div class="alert alert-success"> <span><i class="bi-newspaper"></i></span> FAQ's LIST <button class="btn" onClick="_get_form('faqs_reg')"><i class="bi-plus-square"></i> ADD NEW FAQ</button></div>
                    
                <div class="faq-back-div faqs-back" >
                    <div class="faq-text-div ">

                        <div class="fetch animated fadeIn" id="fetch_faq">
                            <script> _get_fetch_faq('');</script>
                        </div>
                        <!-- <div class="quest-faq-div main-faqs">
                            <div class="faq-title-text main-faqs-title-div">
                               <span>2</span>
                            </div>

                            <div class="faq-title-text main-faqs-title-div main-faqs-title-div2" onclick="_collapse('faq244')" style="cursor:pointer;">
                            <i class="bi-pencil-square"></i> <span>Who we are</span>
                            <div class="expand-div" id="faq244num">&nbsp;<i class="bi-plus"></i>&nbsp;</div>
                            </div>
                            
                            <div class="faq-answer-div faq-answer-div2" id="faq244answer" style="display: none;">  
                                <p>Euclidean geometry is a study of geometric properties and relationships in two and three-dimensional space.</p>
                                <p>Euclidean geometry is a study of geometric properties and relationships in two and three-dimensional space.</p>
                            </div>
                            
                        </div>  -->

                    </div>
                </div>
        </div>
     <script>
        superplaceholder({el: search_txt,
            sentences: ['Type here to search...', 'Top ID e.g TOP00000','Top Name e.g Statistic, Geometry'],
            options: {
            letterDelay: 80,
            loop: true,
            startOnFocus: false
        }
    });
    </script>

<?php } ?>

























<?php if ($page=='view_all_payment'){?>

<div class="main-dashboard-div" >
         <div class="search-div animated fadeIn">
             <!--------------------------------all search select------------------------->
            <select id="status_id" class="text_field status_text" onchange="_get_status('view_search_payment')" title="SELECT STATUS">
                <option value="" selected="selected">PAYMENT STATUS</option>     
                <script>_get_select_status('3,4');</script>
            </select>
             <input id="search_txt"  type="text" class="text_field " onkeyup="_get_search('view_search_payment')" placeholder="Type here to search..." title="Type here to search" />
         </div>
         <div class="add-alert-div">
             <i class="bi-list"></i><span id="">PAYMENT REPORT LIST</span>
             <button class="btn"  onclick="_get_form('');"><i class="bi-person-plus"></i>ADD NEW ADMIN/STAFF</button>
         </div>

             <div class="back-div payment-back-div">
                    <div class="fetch animated fadeIn">
                        <div class="table-div" id="message">
                            <table  cellspacing="0" id="fetch"> 
                                <script>_get_fetch_all_payment('','','');</script>     
                            </table>
                        </div>
                    </div>
            </div>    
</div> 
<script>
        superplaceholder({el: search_txt,
            sentences: ['Type here to search...', 'Mobile number e.g 08131252996 ','Payment ID e.g PAY_00247395838932'],
            options: {
            letterDelay: 80,
            loop: true,
            startOnFocus: false
        }
    });
    </script>
<?php } ?>























































