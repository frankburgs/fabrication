
<details><summary>wood-work work-flowk</summary>

``` mermaid
      flowchart LR;
      chop([chop]) --> drill([drill]);
      drill --> route([route<br/>sand]);
      route --> dye([food dye]);
      dye --> oil([mineral oil]);
      oil --> assemble([assemble]);
      class chop,drill,route,dye,oil,assemble cssClass;
      classDef cssClass fill:black,stroke:aqua;
```

</details>
