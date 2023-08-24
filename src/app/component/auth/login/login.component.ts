import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import {CanvasWhiteboardComponent, CanvasWhiteboardOptions, CanvasWhiteboardUpdate} from 'ng2-canvas-whiteboard';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  viewProviders: [CanvasWhiteboardComponent],
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  canvasOptions: CanvasWhiteboardOptions = {
    drawButtonEnabled: true,
    drawButtonClass: "drawButtonClass",
    drawButtonText: "Draw",
    clearButtonEnabled: true,
    clearButtonClass: "clearButtonClass",
    clearButtonText: "Clear",
    undoButtonText: "Undo",
    undoButtonEnabled: true,
    redoButtonText: "Redo",
    redoButtonEnabled: true,
    colorPickerEnabled: true,
    fillColorPickerText: "Fill",
    strokeColorPickerText: "Stroke",
    saveDataButtonEnabled: true,
    saveDataButtonText: "Save",
    lineWidth: 5,
    strokeColor: "rgb(0,0,0)",
    shouldDownloadDrawing: true
  };

  @Output() onClear = new EventEmitter<any>();
  @Output() onBatchUpdate = new EventEmitter<CanvasWhiteboardUpdate[]>();
  @Output() onImageLoaded = new EventEmitter<any>();
  @Output() onUndo = new EventEmitter<any>();
  @Output() onRedo = new EventEmitter<any>();
  @Output() onSave = new EventEmitter<string | Blob>();

  @ViewChild('canvasWhiteboard') canvasWhiteboard: CanvasWhiteboardComponent;
  
  constructor() { }

  ngOnInit(): void {
  }

  onCanvasUndo(updateUUID: string) {
    console.log(`UNDO with uuid: ${updateUUID}`);
    
    //Returns base64 string representation of the canvas
    let generatedString = this.canvasWhiteboard.generateCanvasDataUrl("image/jpeg", 0.3);
     
    //Generates a IE canvas blob using a callbak method
    this.canvasWhiteboard.generateCanvasBlob((blob: any) => {
       console.log(blob);
    }, "image/png");
    
    //This method uses both of the above method and returns either string or blob
    //using a callback method
    this.canvasWhiteboard.generateCanvasData((generatedData: string | Blob) => {
        console.log(generatedData);
    }, "image/png", 1);
    
    //This method downloads the image using either existing data if it exists
    //or creates it locally
    // this.canvasWhiteboard.downloadCanvasImage("image/png", existingData?, "customFileName");
    
    //If you need the context of the canvas
    let context = this.canvasWhiteboard.context;
  }
}
