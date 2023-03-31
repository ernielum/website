import React from 'react'

function TopicsPage() {
    return (
        <>
        <h2>Web Development Concepts</h2>
            <nav class="localnav">
                <a href="#AboutWebServers">About Web Servers</a>
                <a href="#FrontEndDesign">Frontend Design</a>
                <a href="#OptimizingImages">Optimizing Images</a>
                <a href="#CascadingStylesheets">Cascading Stylesheets</a>
                <a href="#Forms">Forms</a>
                <a href="#Express">Express</a>
                <a href="#JavaScript">JavaScript</a>
                <a href="#DOMManipulation">DOM Manipulation</a>
            </nav>
            <article id="AboutWebServers">
                <h3>About Web Servers</h3>
                <p>
                    In VS Code, I created a file called index.html. After I opened the file, I used keystrokes, CTRL +
                    I,
                    and selected HTML Sample which pre-populated the file with the appropriate tags. My name was input
                    between
                    the title tags which shows in the browser window's tab. My full name and assignment number were
                    added
                    as headings. Finally, the answers to the writing prompts (including this paragraph) is displayed
                    under each
                    header. By convention, the index is the designated homepage on a web server and is accessed if no
                    specific
                    page is requested.
                </p>
                <p>
                    While viewing my page with developer tools, we are primarily interested in the "Network" tab. I am
                    able to
                    view the HTTP request that was sent under "index.html". The request method is GET with status code
                    200 for "OK".
                    The response is identical to the contents of this file that is being edited.
                </p>
                <p>
                    While viewing the file on the web server with developer tools, I see additional requests for
                    "fonts.css",
                    "favicon.ico", and "single-file-hooks-frames.js". The time to load is significantly longer (but
                    still very fast) when loading from
                    a web server in comparison to from a local hard drive.
                </p>
                <p>
                    The file "favicon.ico" has a status code 200 because the request URL for the icon is valid. The icon
                    is
                    displayed next to the
                    title in the browser tab. The files, "main.css" and "main.js", do not have status code 200 but
                    instead status code 404 (not
                    found).
                    A status code in the 400's mean that the request failed because of a client error, and it is likely
                    that it is
                    due to
                    the page has not having implemented a .css or .js file yet. The request URL are specifically looking
                    for those
                    files.
                </p>
                <p>
                    The URL to my web file is "https://web.engr.oregonstate.edu/~lumer/a1-lumer/". The schema is
                    "https". The
                    subdomain is
                    "web.engr". The host domain is "oregonstate.edu". The resource is "/~lumer/a1-lumer/". By
                    convention, a request
                    for
                    "/" is mapped to the file at the path "/index.html"
                </p>
            </article>
            <article id="FrontEndDesign">
                <h3>Frontend Design</h3>
                <p>
                    Frontend design focuses on developing a page that is suitable for users which includes, but not
                    limited, to visual design and interactive experience. It is important to note that the visual design
                    of
                    a page requires a consistent color scheme, font and typography scheme, and a photography, icon, and
                    illustration scheme. More importantly, the navigation system should direct users to the appropriate
                    pages. Trends in front
                    end design often change. Some recent trends include rendering immersive 3D worlds or creating a
                    scrapbook aesthetic.
                </p>
                <p><b>Usability</b> refers to the quality of a user's experience with a product. Suppose our product is
                    a website. A usable website can be measured by the five "E"s:</p>
                <dl>
                    <dt>Effective</dt>
                    <dd>A usable website helps users complete their goals.</dd>
                    <dt>Efficient</dt>
                    <dd>A usable website allows users to complete tasks easily and in a short amount of time.</dd>
                    <dt>Easy to Navigate</dt>
                    <dd>A usable website is easy for new users to navigate.</dd>
                    <dt>Error-free</dt>
                    <dd>A usable website does not have errors that interrupt the user experience.</dd>
                    <dt>Enjoyable or Engaging</dt>
                    <dd>A usable website fits the needs of its intended audience.</dd>
                </dl>
                <p>
                    Page layout tags are used to structure the contents of a page. A typical page consists of the
                    following layout tags:
                    header, nav, main, section, articles, asides, and a footer. The header element represents the banner
                    of the website. The nav element provides navigation links to other pages. The main element holds the
                    dominant content of the page. The section element is used to group related content, while the
                    article
                    element is used within the section element to denote a specific topic. The aside element contains
                    content related to an article and typically floats to the side of the article. The footer element
                    usually contains the website owner's copyright statement. Visually, page layout tags divide
                    contents into
                    blocks with line breaks. More importantly, these tags allow machines to find
                    information in the appropriate areas of the page.
                </p>
                <p>
                    The anchor element is used to create links from one page to another by utilizing the "href"
                    attribute. This attribute may specify a URL so that the user will be taken to that URL when clicked.
                    It may also link to a specific location of the page by adding an "id" attribute to the desired
                    element and adding the value of the "id" attribute preceded by a hash symbol at the end of the URL.
                </p>
            </article>
            <article id="OptimizingImages">
                <h3>Optimizing Images</h3>
                <p>
                    There are six major specifications of images for the web: a descriptive file name, small file size,
                    exact dimensions, correct file format, reduced resolution, and color mode. Having a
                    descriptive file
                    name improves search engine optimization; therefore, the name of the image file should be
                    descriptive yet concise. For example, if the image were of a calico cat playing with yarn, the file
                    name can be
                    "calico-cat-yarn". Note that hyphens are used to separate words in the image file name. Reducing
                    file sizes allow for faster load times and uses less memory space. Depending on the image
                    compression, image quality
                    may also be reduced with file size. Images should also be cropped to fit the exact dimensions of
                    the provided space on a web page to eliminate unnecessary loading time. Using appropriate file
                    formats for online images such as .jpg, .png, or .gif also reduces the amount of server space used.
                    Including image files of multiple display resolutions allow browsers on different devices to receive
                    the appropriate image resolution and save bandwidth.
                </p>
                <p>
                    The most common file formats for line art are .gif, .png, and .svg due to some advantages. GIF files
                    may have 8-bit transparency or animation.
                    PNG files have true transparency. SVG files support interactive and animated images. On the other
                    hand, the most common file formats for photography are .jpg and .webp. Both JPG and WebP files
                    compress
                    photographic images to smaller file sizes.
                </p>
            </article>
            <article id="CascadingStylesheets">
                <h3>Cascading Stylesheets</h3>
                <p>
                    Incorporating stylesheets into websites and applications improve usability, readability, and
                    legibility. HTML provides basic structure and organization of content, but stylesheets control the
                    presentation. Stylesheets separate the content from the display details.
                </p>
                <p>
                    Styles can be incorporated in five different ways:
                </p>
                <ul>
                    <li>External CSS file that is linked or imported</li>
                    <li>Embedded within a &lt;style&gt;&lt;/style&gt; tag</li>
                    <li>Inline within an element with an attribute and value</li>
                    <li>Using template literals within a JavaScript function</li>
                    <li>In JavaScript</li>
                </ul>
                <p>
                    Externally linked CSS files are the preferred method for incorporating stylesheets; however, the
                    other methods are sometimes used to change one or few details.
                </p>
            </article>
            <article id="Forms">
                <h3>Forms</h3>
                <p>Online forms are used on a daily basis and their accessibility improve user experience, especially
                    for new or handicapped users. Accessible forms aim to provide clear directions with labels or
                    placeholder values. The form should indicate required fields and inform users about why such
                    information is requested. The first field of the form should be set to autofocus so that users may
                    begin typing immediately. All form controls should be able to be filled with only the use of a
                    keyboard so that users who do not have a mouse or trackpad can complete the form. Tab indexing
                    should be added to identify the order of the fields to be filled. Lastly, validation messages should
                    be screen-readable since the built-in HTML browser message does not have that functionality.</p>
                <p>
                    A form is added to an HTML document by using the &lt;form&gt; tag. It contains two important
                    attributes: "action", which designates where the requested form should be sent and "method", which
                    identifies the HTTP method to be used as the form is submitted (typically GET or POST). The
                    &lt;label&gt; tag describes the purpose of a data entry and uses the "for" attribute that links to
                    the form control's "id" attribute. The &lt;fieldset&gt; and &lt;legend&gt; tags are used to
                    organize form controls in a logical order and promotes accessibility. The &lt;input&gt; tag is the
                    most common tag within a form. It contains the "type" attribute, which changes its display and
                    functionality for data entry. Some of these types include email and checkbox. The &lt;input&gt; also
                    contains the "name" attribute that helps the server to
                    identify data items upon form submission. The "required" attribute also require users to enter data
                    and prevents bots from submitting repeatedly. The &lt;select&gt; tag enables a drop-down list of
                    choices for the user and the &lt;option&gt; tags are used to add choices into the drop-down list.
                    The &lt;textarea&gt; tag creates an area that allow the user to input long lines of text. The
                    &lt;button&gt; sends the data to the location specified by the "action" attribute of the
                    &lt;form&gt; tag.
                </p>
                <p>
                    Improving usability can be accomplished by styling certain HTML elements and attributes. The
                    fieldset
                    should change its border color from its default, gray, and have increased margins between other
                    fieldset elements. The legend and label elements of a fieldset should also be differentiated
                    from one another. Large
                    fingers and hands are accommodated by increasing font size and padding to the input, button,
                    textarea, and select elements. Inducing a color change to a field with the mouse's focus will prompt
                    the user to begin typing. Adding color to required fields and/or an asterisk informs the user that
                    data must be
                    entered into that field. Valid and invalid data inputs can also be identified by changing the color
                    of the field accordingly. Complex forms may also utilize "disabled" and "enabled" attributes to hide
                    specific parts of a form unless the user provides the appropriate input.
                </p>
            </article>
            <article id="Express">
                <h3>Express</h3>
                <p>
                    Node.js is a runtime environment that is used to develop server-side and networking applications.
                    Node.js applications are written in JavaScript and can be run within the runtime environment on
                    different operating systems.
                    npm serves as an online repository for publishing Node.js packages and a command-line utility that
                    can install packages from the online repository. Express.js is one of many frameworks that is
                    developed for building Node.js web applications. It provides APIs, short for Application Programming
                    Interface, of various common tasks that web applications can interact with. In summary, Node.js
                    provides the developer with a library of JavaScript modules, while npm serves as the package
                    manager, and Express provides the data that is needed to develop a web application.
                </p>
            </article>
            <article id="JavaScript">
                <h3>JavaScript</h3>
                <p>
                    In JavaScript, a value can be of the following data types: a number, a Boolean value which can
                    either be "true" or
                    "false", a string, a symbol, a special value which can either be "undefined" or "null", or an
                    object. A JavaScript object is identified as a set of name-value pairs and are considered the
                    properties of the object. Properties of an object can be created, read, updated, or deleted (CRUD).
                    An array is a JavaScript object whose property names are the strings "0", "1", and so forth.
                    Elements of an array can be accessed by using bracket notation and the string-based property name.
                    JSON is a format for data exchange that is programming language independent. An
                    object can be mapped to a string in JSON format or created from a string in JSON format.
                    Conditionals and loops are used to make decisions in a program. It is best practice to avoid
                    JavaScript's automatic type conversions by coding conditions to explicitly produce either "true" or
                    "false". Object-oriented programming is used to model a system as a collection of objects. These
                    objects represent some part of the system and can contain functions and/or data. Functional
                    programming allows functions to be assigned to variables, functions to receive other functions as
                    arguments, and functions to return functions.
                </p>
            </article>
            <article id="DOMManipulation">
                <h3>DOM Manipulation</h3>
                <p>
                    Updating the DOM of a page allows developers to produce dynamic and interactive pages where user
                    interaction can influence or change a page's layout or content. JavaScript is used to access and
                    modify the elements in the DOM while Express organizes the page's functionality with middleware and
                    routing. In JavaScript, functions called event handlers modify the elements in the DOM or send HTTP
                    requests to another server.
                </p>
            </article>
        </>
    );
}

export default TopicsPage;