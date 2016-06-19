---
layout: slide
slug: slug-example
data:
  x: 4000
  y: 4000
  z: -3000

---

<style media="screen">
#{{page.slug}} blockquote {
font-size: 20px !important;
line-height: 22px !important;
width: 70%;
}

#{{page.slug}} blockquote figure {
padding: 0 20px;
}

#{{page.slug}} blockquote figure:first-child {
padding-top: 20px;
}
#{{page.slug}} blockquote figure:last-child {
padding-bottom: 20px;
}


</style>



<div class="code-stuff">

{% highlight yaml %}
---
layout: slide
slug: slug-example
data:
  x: 4000
  y: 5000

---
{% endhighlight %}
{% highlight html %}<style media="screen">{% endhighlight %}{% highlight css %}
#{% raw %}{{page.slug}}{% endraw %} blockquote {
  font-size: 20px !important;
}{% endhighlight %}{% highlight html %}</style>{% endhighlight %}

</div>

&nbsp;

*...and check out the syntax highlighting, too!*
{:.text-center}
