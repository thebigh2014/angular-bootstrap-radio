angular-bootstrap-radio
=======================

Bootstrap styled radio button directive for AngularJS

Screenshot:

![Screenshot](/radio.png?raw=true "Screenshot")

### Description:

The standard radio buttons which use the input HTML element just don't look good in combination with Bootstrap.

Surprisingly, I could not find any nice looking, simple radio button, so I built one. It is based on a button and FontAwesome which behaves like a normal radio button.

The angular-bootstrap-radio is compatible with the usage of the original AngularJS input[radio].

### Installation via Bower:

```
$ bower install angular-bootstrap-radio --save
```

### Usage:

Include the dist files.

If you don't use FontAwesome and instead want to create your own template, see the directive and LESS (in /src) for examples.

Add "ui.radio" to your modules list. Then you can use it like AngularJS input[radio]:

```
<radio
    ng-model="radioModel"
    value="option1"
    name="custom-name"              (Optional)
    ng-change="onChange()"          (Optional)
    ng-value="scopeValue"           (Optional)
></radio>
```

Additionally you can set the size:

```
<radio ...></radio>            (Normal size, corresponds to 'btn-xs')
<radio class="large" ...></radio>      (Large, corresponds to 'btn-sm')
<radio class="larger" ...></radio>     (Larger, corresponds to Button default size)
<radio class="largest" ...></radio>    (Largest, corresponds to 'btn-lg')
```

###Configure

By default, FontAwesome icon is used but you can customize the classes within ui-radio through the uiRadioConfig constant. You can alter the constant globally in your apps boot phase or within a controller and pass the options to the radio directive as a parameter.

```
//controller
$scope.customConfig = {
	iconClass: 'fa fa-circle',
	buttonClass: 'btn btn-default btn-success'
};
```

```
<span radio="customConfig" ng-model="form.ok"></span>
```


![Screenshot](/sizes.png?raw=true "Screenshot Sizes")

And also style the radio buttons like Bootstrap buttons:

```
<radio class="btn-primary"></radio>    (Looks like primary button)
<radio class="btn-success"></radio>    (Looks like success button)
<radio class="btn-info"></radio>       (Looks like info button)
<radio class="btn-warning"></radio>    (Looks like warning button)
<radio class="btn-danger"></radio>     (Looks like danger button)
```

![Screenshot](/styles.png?raw=true "Screenshot Styles")

See index-fa.html for examples and how it works.

### License

Copyright (c) 2014 Sebastian Hammerl, Getslash GmbH, Helmut Wollenberg

Licensed under the MIT License
