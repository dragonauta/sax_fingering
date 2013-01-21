//=============================================================================
//
//  Sax fingering plugin
//  Based on Recorder Fingering by Nicolas Froment (lasconic)
//  Copyright (2013) Diego Rucci (dragonauta)
//
//  This program is free software; you can redistribute it and/or modify
//  it under the terms of the GNU General Public License version 2.
//
//  This program is distributed in the hope that it will be useful,
//  but WITHOUT ANY WARRANTY; without even the implied warranty of
//  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//  GNU General Public License for more details.
//
//  You should have received a copy of the GNU General Public License
//  along with this program; if not, write to the Free Software
//  Foundation, Inc., 675 Mass Ave, Cambridge, MA 02139, USA.
//=============================================================================

//
// This is ECMAScript code (ECMA-262 aka "Java Script")
//

var fingerings = [ "`123456cB", "`123456cb", "`123456c", "`123456cC", "`123456", "`123456D", "`12345", "`1234", "`1235", "`123", "`123G", "`12", "`1.", "`1", "`2", "`", "`1234568", "`123456D8", "`123458", "`12348", "`12358", "`1238", "`123G8", "`128", "`1.8", "`18", "`28", "`8", "`d8", "`dy8", "`dye8", "`dye8f", "`dye8fF", "`81d45D", "`82r45D", "`8136", "`81345r", "`823456Bc", "`834", "`8346rd", "`81346"]

//---------------------------------------------------------
//    init
//---------------------------------------------------------

function init()
  {
  
  }

//-------------------------------------------------------------------
//    run
//-------------------------------------------------------------------

function run()
  {
  if (typeof curScore === 'undefined')  
    return;
  var cursor   = new Cursor(curScore);
  cursor.staff = 0;
  cursor.voice = 0;
  cursor.rewind();  // set cursor to first chord/rest
  var font = new QFont("woodwind tablature sax us", 9);
  while (!cursor.eos()) {
    if (cursor.isChord()) {
      var pitch = cursor.chord().topNote().pitch;
      var index = pitch - 58;
      if(index >= 0 && index < fingerings.length){ 
        var text  = new Text(curScore);
        text.text = fingerings[index];
        text.defaultFont = font;
        if (pitch < 83) {
          text.yOffset = -7;
        } else {
          text.yOffset = 4;
        }
        cursor.putStaffText(text);
      }
    }
    cursor.next();
  }
}

var mscorePlugin = {
  menu: 'Plugins.Saxophone Fingering',
  init: init,
  run:  run
};

mscorePlugin;
