# აპლიკაციის ძირითადი სტრუქტურა
აპლიკაცია შექმნილია NX ვორქსფეისის სახით და შეიცავს:<br>
2 პროექტს - web და mobile<br>
4 ბიბლიოთეკას - shared, core, promotion, comments.<br>

## web & mobile - პროექტები
ორივე პროექტი ერთმანეთის ანალოგიურია სტრუქტურულად. ვიყენებთ Lazy Loading ს რატა თავიდანვე არ მოხდეს ყველა მოდულის ჩატვირთვა. app-component შია როუტინგი რომელიც ნავიგაციის დროს ტვირთავს შესაბამის მოდულს. მოდულები არის ჩაშლილი features ფოლდერში. ასევე გვაქვს ლოკალური სერვისები და სთორები, რისი არსებობაც იმაზე მეტყველებს რომ იგი უნიკალურია მხოლოდ მოცემული პროექტისთვის და არ ხდება მისი ანალოგიური სახის გამოყენება მეორე პროექტში.<br>
შექმნილია 2 ვორქსფეის ფაილი და პროექტზე მუშაობა ხელსაყრელია მისი გახსნით.
 
### სტილები
ვიყენებთ ბუთსტრაპის Sass ვერსიას და მინიმუმამდეა დაყვანილი მისი ზომა.
ფონტებისთვის გვაქვს fontawesome-ს regular, solid, brand ვარიაციები.
რესპონსივის Breakpoint-ები აღწერილია _responsive.scss ფაილში და !important flag-ით ხდება override სტილების. 
_common.scss ფაილშია ძირიტადი კომპონენტები რასაც რამდენიმე სხვადასხვა ადგილას შევხვდებით.

### CustomRouteReuseStrategy
შექმნილია CustomRouteReuseStrategy რომლის მეშვეობით ინახევა წინა და შემდეგი როუტების DOM. ამისთვის app-routing.module-ში ყველა როუტს აქვს თავისი უნიკალური key.

### Webpack
ბილდისთვის ვიყენებთ webpack-ს და angualr.json ში შევხვდებით მის კონფიგურაციას. იგი გატანილია **custom-webpack.config.js** ფაილში. მოცემულის მეშვეობით შესაძლებელი გახდა main.js ბაილის ზომაში შემცირება (moment.js ს ამოაკლდა ლოკალები და დარჩა მხოლოდ ka).

### ChangeDetectionStrategy
ასევე კომპონენტებში სადაც აქტიურად მიმდინარეობს two way binding-ს გამოყენაბა, Change detection გადაყვანილია onPush რეჟიმზე უკეთესი პერფორმანსისთვის.

### PWA
ვიყენებთ Service Worker-ს ქეშირებისთვის და მისი კონფიგს ვიპოვით ngsw-config.json ფაილში. ხოლო მისი იმპორტი ხდება AppModule-ში და არასასურველი ქეშირებისას მის გასაწმენდად კლიენტების მხარეს საჭიროა დაბილდვამდე ?v=** გავზარდოთ ვერსია და ისე დავბილდოთ პროექტი.

### Angular Universal
ვიყენებთ Angular Universal-ს Server Side Rendering-ისთვის და ორივე პროექტში შევხვდებით server.ts ფაილს, სადაც node-express აპლიკაციაა აღწერილი. მოცემული ფაილია მთავარი სასერვერო ფაილი ჩვენი node აპლიკაციის. 

### Preboot Module
სერვერზე დარენდერებული DOM-დან კლიენტის DOM-ზე გადასვლისთვის ვიყენებთ PrebootModule ს ორივე აპლიკაციაში, რომელიც შეუმჩნევლად ახერხებს კლიენტის მხარეს გადახატვას. <br>
შესაძლოა გარე package-მ ვერ მოახერხოს SSR თან მუშაობა (მაგ. angular-swiper). ამისთვის გვჭირდება PrebootModule-ს EventReplayer და მისი replayAll() მეთოდის გამოძახება, რათა კლიენტის მხარეს მოხდეს javascript-ის execute და გადახატოს მოცემული კომპონენტი უკვე წარმატებით. 

### Node server
ვიყენებთ helmet ბიბლიოთეკას dns prefetch-ისთვის.<br>
ვიყენებთ express-useragent ბიბლიოთეკას 301 redirect-ებისთვის, ვებიდან მობაილზე და პირიქით.<br>
ვიყენებთ domino ბიბლიოთეკას, ხელოვნური ფანჯრის შესაქმნელად რათა სერვერზე რენდერის დროს გვქონდეს document და window ინსტანსები.<br>
ვიყენებთ localstorage-polyfill ბიბლიოთეკას, სერვერზე რენდერის დროს აპლიკაციაში არსებული localstorage-ებმა რომ იმუშავოს.<br>


# ვებ და მობაილ პროექტი იზიარებენ ქვემოთ ჩამოთვლილ ბიბლიოთეკებს და იყენებენ საერთო მოდულებს.
## shared - ბიბლიოთეკა
ბიბლიოთეკაში გვაქვს ერთი მთავარი SharedModule, რომლის იმპორტი არის საჭირო რათა წვდომადი გახდეს Pipe-ები.<br>
ასევე მოცემულ ბიბლიოთეკაშია ყველა ის სერვისი და სთორი რაც საერთო გააჩნიათ ვებ და მობილურ აპლიკაციებს. <br>

## core - ბიბლიოთეკა
ბიბლიოთეკაში გვაქვს ერთი მთავარი CoreModule, რომელშიც არის რამდენიმე მთავარი კომპონენტი, ესენია: league-select, loader, match-status.<br>
ასევე ამ ბიბლიოთეკაშივე გვაქვს სტატისტიკების, ცხრილების და სოციალურ-ქსელებში გაზიარების მოდულები.<br>
ზემოთ ჩამოთვლილი კომპონენტები, ისეა აწყობილი რომ მოერგოს როგორც ვებს ისე მობაილს და შესაძლებელია მათში პარამეტრების გადაცემა შესაბამისი პროექტიდან.<br>

## promotion - ბიბლიოთეკა
ბიბლიოთეკა შეიცავს სარეკლამო ბანერებს. მისი გამოყენებისთვის საჭიროა გავაკეთოთ PromotionModule-ს იმპორტი. მოცემულ მოდულში წინასწარ არის შექმნილი ბანერების უმეტესობა და გამზადებული. კოდის დუბლირების თავიდან ასარიდებლად შექმნილია abstract class Promotion. ამის დახმარებით ყველა ახალი ბანერის კომპონენტის შექმნისას, ჩვენ გვაქვს საშუალება გავუწეროთ, რომ Promotion კლასის მემკვიდრეა ჩვენი ახალი კომპონენტი. გვრჩება მხოლოდ id პარამეტრის აღწერა ამ ჩევნს ახალ კომპონენტში და OnInit, OnDestroy მშობელი მეთოდების გამოძახება super() ფუნქციის დახმარებით.<br>

## comments - ბიბლიოთეკა
ბიბლიოთეკა შეიცავს მხოლოდ ერთ მოდულს CommentsModule და მისი იმპორტის შემდეგ შეგვიძლია ყველგან ჩავსვათ კომენტარების კომპონენტი, როგორც ვებში ასევე მობაილში.
იმისთვის რომ კომპონენტმა შეძლოს მუშაობა სხვადასხვა სახის გვერდებზე (მაგალითად ახლა როგორც არის მატჩის და სიახლის), ამისთვის დამატებულია @Input() პარამეტრი commentsService და ამგვარად შესაძლებელია გარედან მივაწოდოთ მატჩის ან სიახლის სერვისი და itemId შესაბამისის.<br>

## P.S.
ბიბლიოთეკები იყენებენ environment-ებს და მათთვის აპლიკაციის environment ფაილი რომ წვდომადი იყოს, ორივეგან ვებშიც და მობაილშიც app.module ში გაწერილია env პროვაიდერი და შემდეგ ბიბლიოთეკაში შეიძლება მისი დაინჯექტება და მნიშვნელობის გამოყენება. ასევეა ModalService-ც. <br>

**არაა რეკომენდირებული რომელიმე კონკრეტულ ბიბლიოთეკაში, კონკრეტული მოდულის გადატვირთვა კომპონენტებით, რადგან ბევრგან ხდება იმპორტი და დაამძიმებს აპლიკაციას, ჯობია ახალი ბიბლიოთეკა შეიქმნას თუ დიდი თასქია.**<br>

# ბრძანებები
**ng serve web** - ვების პროექტის დასტარტვა.<br>
**ng serve mobile** - მობილურის პროექტის დასტარტვა.<br>

სხვა საჭირო ბრძანებები აღწერილია package.json ფაილში და გამზადებულია ყველა სახის ბილდი რაც საჭიროა პროექტისთვის. ნაწილის აღწერა:<br>

**web:serve:ssr** - ვების node სერვერის დასტარტვა ლოკალურად. (საჭიროა ლოკალური ვერსიის ბილდი დასტარტვამდე).<br>
**mobile:serve:ssr** - მობილურის node სერვერის დასტარტვა ლოკალურად. (საჭიროა ლოკალური ვერსიის ბილდი დასტარტვამდე).<br>
**web:build:ssr:dev** - ვების ბილდი ლოკალური გამოყენებისთვის.<br>
**web:build:ssr:pre** - ვების ბილდი დეველომენტზე გადასაწერად (node.goal.ge - node/web/ ფოლდერში).<br>
**web:build:ssr:prod**  - ვების ბილდი პროდაქშენზე გადასაწერად (goal.ge - goal-front/web/ ფოლდერში).<br>
**mobile:build:ssr:dev** - მობილურის ბილდი ლოკალური გამოყენებისთვის.<br>
**mobile:build:ssr:pre** - მობილურის ბილდი დეველომენტზე გადასაწერად (nodem.goal.ge - node/mobile/ ფოლდერში).<br>
**mobile:build:ssr:prod** - მობილურის ბილდი პროდაქშენზე გადასაწერად (m.goal.ge - goal-front/mobile/ ფოლდერში).<br>
გამოყენების მაგალითი:<br>
npm run web:build:ssr:pre<br>