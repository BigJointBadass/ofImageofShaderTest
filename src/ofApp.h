#pragma once

#include "ofMain.h"
#include "ofxFFmpegRecorder.h"
#include "ofxFastFboReader.h"

class ofApp : public ofBaseApp {
public:

    void setup();
    void update();
    void draw();

    void keyPressed(int key);
    void keyReleased(int key);

    void mouseMoved(int x, int y);
    void mouseDragged(int x, int y, int button);

    void mousePressed(int x, int y, int button);
    void mouseReleased(int x, int y, int button);

    void mouseScrolled(int x, int y, float scrollX, float scrollY);

    void mouseEntered(int x, int y);
    void mouseExited(int x, int y);

    void windowResized(int w, int h);
    void dragEvent(ofDragInfo dragInfo);
    void gotMessage(ofMessage msg);

    ofxFFmpegRecorder cap_Recorder;
    ofFbo cap_Fbo;
    ofFbo blitFbo;
    ofFbo::Settings cap_Fbo_Settings;
    ofPixels cap_Pix;
    ofxFastFboReader cap_Reader;
    bool bRecording = false;

    ofImage image;
    ofShader shader;
    float zoom;
};
