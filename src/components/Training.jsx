import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Training = () => {
  return (
    <>
      <Header />

      <body>

  <div class="inner-banner">
  </div>
  <section class="w3l-breadcrumb">
    <div class="container">
      <ul class="breadcrumbs-custom-path">
        <li><a href="index.html">Home</a></li>
        <li class="active"><span class="fa fa-arrow-right mx-2" aria-hidden="true"></span>Workshop/Training/Course</li>
      </ul>
    </div>
  </section>
  <section class="w3l-index3" id="about">
    <div class="midd-w3 py-5">
      <div class="container py-lg-5 py-md-3">
        <div class="row">
          <div class="col-lg-7 mb-lg-0 mb-md-5 mb-4 align-self">
            <h6 class="title-subhny">Kindway BioRezens</h6>
            <h3 class="title-left mx-0">Workshop on Dental Implantology: From Diagnosis & Planning to Execution</h3>
            <p class="mt-md-4 mt-3">Dental implants are today's gold standard for
replacing missing teeth. However, many clinicians
hesitate to integrate implantology into their routine
practice due to lack of exposure to proper diagnosis,
treatment planning, and surgical execution.
This intensive workshop will provide
participants with a comprehensive understanding of
implantology—from fundamentals to live surgical
demonstration—enabling them to confidently
incorporate implants into their clinical practice.</p>
<p>Please scan below QR code for registration form.</p>
<br/>
<div>
  <img src="../assets/images/qrform.jpeg" height="40%" width="40%"/>
</div>
            <a class="btn btn-style btn-primary mt-sm-5 mt-4 mr-2" href="https://docs.google.com/forms/d/e/1FAIpQLSfn-3ipARVcitwERkEnyy-zjfuojuprZM9u7cQS1U98Ow4V0w/viewform?usp=publish-editor">Register Now</a> <a class="btn btn-style btn-primary mt-sm-5 mt-4 mr-2" href="/assets/doc/dentalbrochure.pdf">Brochure</a> <a class="btn btn-style btn-primary mt-sm-5 mt-4 mr-2" href="/assets/doc/syllabus.pdf">Syllabus</a>
          </div>
          <div class="col-lg-5 mt-lg-0 mt-4">
            <div class="position-relative">
              <img src="../assets/images/training.jpg" alt="" class="radius-image img-fluid"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>   

  <section class="w3l-index2" id="about1">
    <div class="midd-w3 py-5"/>
      <div class="container py-lg-5 py-md-4 py-2">
        <div class="row">
          <div class="col-lg-6 left-wthree-img">
            <div class="position-relative">
              <img src="assets/images/ex2.jpg" alt="" class="radius-image img-fluid"/>

            </div>
          </div>
          <div class="col-lg-6 mt-lg-0 mt-5 pl-lg-5 align-self">
            <h6 class="title-subhny">What Sets us Apart</h6>
            <h3 class="title-w3l">Training and Education</h3>
            <p class="mt-4">At Kindway Biorezens, we believe that excellence in dentistry is built on continuous learning. Our commitment goes beyond manufacturing products — we invest in the growth of dental professionals by offering advanced, practice-oriented training tailored to real-world clinical needs. Our programs are designed to bridge the gap between theory and practice, equipping clinicians with confidence, skill, and the latest evidence-based techniques.
            </p>
            <h3> Comprehensive Learning Experience</h3>
              <p>We provide structured training pathways that combine:</p>
              <p>Expert-led lectures to build strong theoretical understanding</p>
              <p>Live clinical demonstrations and case discussions for real-time learning</p>
              <p>Hands-on practice sessions on models, typodonts, and guided surgical procedures</p>
              <p>Opportunities to observe and assist in live patient treatments for authentic clinical exposure</p>
              <p>Skill-building modules covering diagnostics, surgical protocols, prosthetics, and post-operative care </p>
              <p>Our workshops and education series empower practitioners to transition confidently from classroom knowledge to clinical execution — making advanced dentistry more accessible to every clinician.</p>
              <h3>Mentorship From Leaders in the Field</h3>
              <p>Under the guidance of experienced faculty and industry experts, participants learn modern techniques, treatment planning, and complication management with personalized mentorship and constructive feedback. </p>
              <h3>Upskilling for Every Stage </h3>
              <p>Whether you are a beginner entering implant dentistry or an experienced clinician seeking advanced refinement, our programs support every phase of professional growth — ensuring knowledge translates seamlessly to practice and patient care.</p>            
          </div>
        </div>
      </div>
  
  </section>  
  
  <section class="w3l-index2" id="about1">
    <div class="midd-w3 py-5">     
    </div>
  </section>
  
 
{/*  
  <script src="assets/js/jquery-3.3.1.min.js"></script>
  <script src="assets/js/theme-change.js"></script>

 
  <script>
    $(window).on("scroll", function () {
      var scroll = $(window).scrollTop();

      if (scroll >= 80) {
        $("#site-header").addClass("nav-fixed");
      } else {
        $("#site-header").removeClass("nav-fixed");
      }
    });

 
    $(".navbar-toggler").on("click", function () {
      $("header").toggleClass("active");
    });
    $(document).on("ready", function () {
      if ($(window).width() > 991) {
        $("header").removeClass("active");
      }
      $(window).on("resize", function () {
        if ($(window).width() > 991) {
          $("header").removeClass("active");
        }
      });
    });
  </script>
 

  <script src="assets/js/bootstrap.min.js"></script>

  <script>
    (function (w, d, s, u) {
        w.gbwawc = {
            url: u,
            options: {
                waId: "+91 91988 46529",
                siteName: "Kindway Biorezens",
                siteTag: "Innovation, Quality & Precision",
                siteLogo: "https://assets.gallabox.com/gb-home/wa-chat-widget/bot-logo-3.png",
                widgetPosition: "LEFT",
                welcomeMessage: "Welcome in Kindway Biorezens Pvt. Ltd.",
                triggerMessage: "Kindway Biorezens",
                brandColor: "#25D366",
                messageText: "I am looking for a",
                replyOptions: ["Order product to deliver my home", "Workshop / Training"],
                version: "v1",
                widgetPositionMarginX: "12",
                widgetPositionMarginY: "12",
            },
        };
        var h = d.getElementsByTagName(s)[0],
            j = d.createElement(s);
        j.async = true;
        j.src = u + "/whatsapp-widget.min.js?_=" + "2024-12-10 14";
        h.parentNode.insertBefore(j, h);
    })(window, document, "script", "https://waw.gallabox.com");
  </script>


<script type="text/javascript">
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/690dc56ca2e13a195dc64d8c/1j9esmd10';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
$(function() {
	$( "#Accordion1" ).accordion(); 
});
</script> */}


</body>
      <Footer />
    </>
  );
};

export default Training;