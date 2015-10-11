/**
 * @param {Type}
 * @return {Type}
 */
import $ from 'jquery';
import {$window} from './selectors';

class FullScreener{
  constructor(){
    this.els = $("[data-fullscreener]");
    this.listners();
    this.setSizes();
  }

  setSizes(){
    let height = window.innerHeight;
    let width = window.innerWidth;
    this.els.map((index, el) =>{
      let _height = height;
      let _width = width;
      let _cur = $(el);
      // RATIOS for Video
      if(_cur.hasClass('fullscreen--ratioed')){
        if(window.innerWidth/window.innerHeight >= 1.777){
          _width = window.innerWidth;
          _height = parseInt(window.innerWidth*9/16);
        } else{
          _width = parseInt(window.innerHeight*16/9);
          _height = window.innerHeight
        }
      }

      // RATIOS for Offsets
      if(_cur.data().fullscreenoffset != null){
        _offsetEls = _cur.data().fullscreenoffset.split(',');
        _offsetEls.map((index, _offsetEl)=>{
          _offsetEl = $(_offsetEl);
          let _offHeight = _offsetEl.height();
          if(_offsetEl.length && _offHeight < _height)
            _height -= _offHeight
        })
      }

      // if _cur.data().fullscreendisablemobile?
      //   if window.innerWidth <= Chabuad.MQ.medium
      //     _height = ''
      //     _width = ''
      //

      if(_cur.data().fullscreenminheight != null){
        let _minheightEl = _cur.find(_cur.data().fullscreenminheight);
        if(_minheightEl.length){
          _minheight = _minheightEl.height();
          _minheight += _minheight*0.45;
        }
        _cur.css('minHeight',_minheight);
      }

      let _setValues = {
        height: _height,
        width: _width
      }
      _cur.css(_setValues).attr(_setValues);

    })
  }
  refresh(){
    this.el = $("[data-fullscreener]");
    this.setSizes();
  }
  listners(){
    $window.on('resize',()=> this.setSizes());
    $window.on('FULLSCREENER:REFRESH',()=>this.refresh())
  }
}

let instance = new FullScreener()
export default instance;

