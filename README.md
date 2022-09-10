# p3-003-keyboard_Inputs 

Handling keyboard presses in phaser 3.55.2.

> __Disclaimer:__ This is not an in-depth guide but serves to give a general pass-through of
settings and code that can be used to achieve the following. The phaser 3 is a lot deeper
than the examples given and going through the docs can possibly reveal new and interesting
features you might find useful

> __Tip:__ When it comes to handling inputs, Phaser usually requires the input method to be
included in the input-map. This just simply means that as you create your game configuration
that you pass to __Phaser.Game()__ you should ensure the input is active. The keyboard by
default is active however inputs such as gamepads are off by default. This also allows for
more customization setting for the input to be made.

## defining keys controls
Phaser requires that you specify ehich keys you want to listen for. This is done using the
input manager under the *this.input* property of a scene.In the case of keyboard controls,
further specify the property keyboard found in the input object i.e *this.input.keyboard*.
This holds the keyboard manager.

To set up a sing key use:
> this.input.keyboard.addKey( key );
- key: *Either a Key object, a string, such as A or SPACE, or a key code value.*

To set up multiple keys use:
> this.input.keyboard.addKeys( keys );
- keys: *An array of either Key objects, a comma separated string, such as A,SPACE,UP, or an
array of key code values.*

The *addKey()* method returns a single object of type Phaser.Input.Keyboard.Key, while the
*addKeys()* method returns an object, whose keys are the key names and the values are
Phaser.Input.Keyboard.Key objects.

## handling key presses
The returned Phaser.Input.Keyboard.Key has a number of properties that allow checking how the
desired key is being interacted with. This is don in the update method so as to continuosly be
checked during the lifetime of the game.

The properties we can use in this case are:
- isDown[boolean]: *returns true if the manager believes the key is currently pressed down.*
- isUp[boolean]: *returns true if the manager believes the key is currently unpressed.*

By checking this states we can give the desired output for such actions.