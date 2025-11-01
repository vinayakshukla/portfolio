import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

declare var TagCloud: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('portfolioWebsite', { static: false }) portfolioWebsite!: ElementRef;

  title = 'Vinayak';
  
  texts = [
    'HTML', 'CSS', 'ANGULAR',
    'JAVA', 'JAVASCRIPT',
    'PYTHON', 'SASS', 'UNIX', 'PUTTY', 'WINSCP', 'BOOTSTRAP', 'JSON', 'GIT', 'TYPESCRIPT', 'SVN',
    'NEO4J', 'SPRINGBOOT', 'DSA', 'MYSQL', 'JQUERY'
  ];

  projects = [
    {
      title: 'Examination Management Application',
      description: 'This project has two user types teachers and students. The teachers can log in to the application and do many operations like setting and updating the question paper, viewing the result of the students, or to register any new student. Students can log in and give the exam, view scores of past examination, and change his password.',
      active: true
    },
    {
      title: 'Notepad with Speech Recognition',
      description: 'Python GUI Project using Model, View Controller(MVC) design pattern, SpeechRecognition, and Pyaudio packages encryption and decryption of text.',
      active: false
    },
    {
      title: 'Chrome Extension For Time Management',
      description: 'A Chrome browser extension where the user can set the maximum time of usage to social media websites. JavaScript, CSS,HTML based application',
      active: false
    },
    {
      title: 'Bussiness Health Monitoring',
      description: 'Currently working on this solution from ignio, the flagship product of a digitate, with the small yet effactive team with the demostrated history of delivering products feature with the strict deadline.',
      active: false
    }
  ];

  ngOnInit(): void {
    // Component initialization
  }

  ngAfterViewInit(): void {
    // Wait for scripts to load and DOM to be ready
    if (typeof (window as any).TagCloud !== 'undefined') {
      this.initializeTagCloud();
    } else {
      window.addEventListener('load', () => {
        this.initializeTagCloud();
      });
    }
  }

  initializeTagCloud(): void {
    if (!this.portfolioWebsite) {
      return;
    }

    const width = this.portfolioWebsite.nativeElement.offsetWidth;
    const circleRadius = width > 600 ? 250 : (width - 100) / 2;

    const TagCloudLib = (window as any).TagCloud;
    if (TagCloudLib) {
      TagCloudLib('.Sphere', this.texts, {
        radius: circleRadius,
        maxSpeed: 'fast',
        initSpeed: 'fast'
      });
    }
  }

  getProjectClass(index: number): string {
    return index === 0 ? 'carousel-item active' : 'carousel-item';
  }
}

