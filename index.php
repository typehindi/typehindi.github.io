<html>
  <head>
    
    <?php
       $title = "TyepHindi";
       $description = "Type in Hindi";
       $keywords = "Hindi Typing";
       include "src/header.php";
       ?>
    
    
    <link href="http://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600" rel="stylesheet" type="text/css" />
    
    <script type="text/javascript" src="https://www.google.com/jsapi"></script>
    
    <script type="text/javascript">
      
      google.load("elements", "1", {
      packages: "transliteration"
      });
      
      function onLoad() {
      var options = {
      sourceLanguage: 'en', 
      destinationLanguage: ['hi'], 
      shortcutKey: 'ctrl+g',
      transliterationEnabled: true
      };

      var control =
      new google.elements.transliteration.TransliterationControl(options);
      control.makeTransliteratable(['transliterateDiv']);
      control.showControl('translControl');
      }

      google.setOnLoadCallback(onLoad);
      
    </script>
    
  </head>
  
  <body class="right-sidebar">
    
    <!-- Main -->
    <div class="wrapper style1">
      
    <div class="container">
      
      <div class="row">
	<div  id="content">
	  <article id="main">
	    
	    <section>                                   
	      
	      <header>
		<p>Type Romanized Hindi words in the box below and the words will be converted into unicode Hindi as you press the spacebar.</p>
	      </header>
	      
	      <p>
		
		Example: Typing <b>"karya hi safalata ki buniyad hai ।" </b> becomes <b>"कार्य  ही सफलता की बुनियाद  है ।"</b>
		
		<ul>
		  <li><span class="list-color">» </span> Use the backspace or click on any words to get more choices.</li>
		  <li><span class="list-color">» </span> Click <strong>अ</strong> button below or press <strong>Ctrl+G</strong> to toggle between English and Hindi.</li>
		</ul>
		
		<div id='translControl'class="button alt"></div>
		
	      </p>

	      <textarea  id="transliterateDiv"  row="5"class="nepali-convertarea"></textarea>
	      
	      <ul>
		<li><span class="list-color">» </span> Highlight to select, copy and paste where needed.</li>
		<li><span class="list-color">» </span> Hard to type letters and full stop can be copied from the list below.</li>
	      </ul>
	      
	      <strong>Hindi Albhabets </strong>
	      
	      <ul>
		<li><strong>12 Vowels</strong>: अ आ इ ई उ ऊ ए ऐ ओ औ अं अँ </li>
		<li><strong>36 Consonants</strong>: क ख ग घ ङ च छ ज झ ञ ट ठ ड ढ ण त थ द ध न प फ ब भ म य र ल व श ष स ह क्ष त्र ज्ञ </li>
		<li><strong>Full Stop (पूर्ण बिराम)</strong> - ।</li>
	      </ul>
	      
	    </section>
	    
	    <hr />
	  </article>
	</div>
      </div>
    </div>
    </div>
    
    <?php 
       include "src/footer.php";
       ?>
    
  </body>
</html>
