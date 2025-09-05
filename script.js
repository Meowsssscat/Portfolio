function downloadCV() {

    const cvContent = `
<!DOCTYPE html>
<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
<head>
<meta charset='utf-8'>
<title>ALPHI SANCON FIDELINO - CV</title>
<style>
body { font-family: 'Arial'; margin: 40px; line-height: 1.6; }
h1 { color: #000000ff; font-size: 24px; text-align: center; margin-bottom: 10px; border-bottom: 2px solid #000000ff; padding-bottom: 10px; }
h2 { color: #000000ff; font-size: 18px; margin-top: 25px; margin-bottom: 15px; }
.contact { text-align: center; margin-bottom: 30px; font-style: italic; }
.section { margin-bottom: 25px; }
ul { margin-left: 20px; }
li { margin-bottom: 8px; }
.project-title { font-weight: bold; color: #000000ff; margin-top: 15px; }
.skills-list { display: flex; flex-wrap: wrap; }
.skill-item { margin-right: 15px; margin-bottom: 5px; }
</style>
</head>
<body>

<h1>ALPHI SANCON FIDELINO</h1>
<div class="contact">alphi.fidelino11@gmail.com</div>

<div class="section">
<h2>EDUCATION</h2>
<div class="project-title">Pakil Senior High School</div>
<ul>
<li>General Academic Strand (2021-2023)</li>
<li>Leadership Award</li>
</ul>
</div>

<div class="section">
<h2>PROJECTS</h2>

<div class="project-title">Oliver Resort Management Website</div>
<ul>
<li>Integrated system for managing the whole resort operation.</li>
<li>Use one centralized database.</li>
<li>HTML, CSS, JAVASCRIPT, FLASK, and MYSQL</li>
</ul>

<div class="project-title">Java Master</div>
<ul>
<li>A quiz game.</li>
<li>Develop for students who wants to learn Java.</li>
<li>Java, and MYSQL.</li>
</ul>
</div>

<div class="section">
<h2>LEADERSHIP</h2>
<div class="project-title">Former programming group leader</div>
<ul>
<li>Led the development of Oliver Resort Management Website and Java Master.</li>
</ul>
</div>

<div class="section">
<h2>SKILLS</h2>
<ul>
<li>Java, and C#.</li>
<li>HTML, CSS, Flask, and JavaScript</li>
<li>MySQL</li>
</ul>
</div>

</body>
</html>`;

    const blob = new Blob([cvContent], { 
        type: 'application/msword'
    });
    
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'Alphi_Sancon_Fidelino_CV.doc';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    URL.revokeObjectURL(link.href);
}