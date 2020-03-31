# API

Api'yi kullanabilmek için terminale 
  npm start 
yazmak gerekiyor.

route/approute.js dosyası içinde tüm yönlendirmeler yer alıyor.
Örneğin http://localhost:3000/deneme yazıp get işlemi yaparsak database'deki deneme içindeki tüm verileri listeliyor.

@@ http://localhost:3000/deneme yazıp post işlemi yaparsak database'e yeni deneme verisi ekliyor. Ama bunun için 

{

	"firstName" : "qwe1",
	"lastName" : "qwe2" 
}

şeklinde veri yollanması gerekiyor.

@@ http://localhost:3000/deneme/update yazıp post işlemi yaparsak database'de istediğimiz deneme verisini düzenleyebiliyoruz.

{

	"id" : "1",
	"firstName" : "qwe1",
	"lastName" : "qwe2" 
}

bunun için hangisini düzenleyeceksek id'de eklememiz gerekiyor.

@@ http://localhost:3000/deneme/delete yazıp post işlemi yaparsak database'de istediğimiz deneme verisini silebiliyoruz.

{

	"id" : "1"
}

bunun için hangisini sileceksek id'sini yollamamız gerekiyor.

@@ Yukarda yazanlar diğer tüm tablolar için geçerlidir tek değişen şeyler. Tablolara eklenecek güncellenecek verilerdir.
Mesela StartUser üzerinde işlem yapmak istiyorsak;

{

	"ID" : "1"  ,
	"Name" : "qwe" ,
	"Surname" : "qwe"  ,
	"Email" : "qweqwe@qwe.qwe"  ,
 	"Telephone" : "1231231" ,
  	"Password" :  "12312311"
}

şeklinde veriler yollanmalıdır. Bu verilere database'den bakılabileceği gibi buradaki model klasörü içindeki dosyalardanda bakılabilir.
