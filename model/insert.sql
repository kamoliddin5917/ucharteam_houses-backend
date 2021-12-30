INSERT INTO users(user_firstname,user_lastname,user_email,user_password) VALUES
('Kamoliddin', 'Jamoliddinov', 'k@gmail.com','k'),
('Umida', 'Hanimqulova', 'u@gmail.com','u'),
('Malika', 'Murodova', 'm@gmail.com','m'),
('Sevinch', 'Valiyeva', 's@gmail.com','s'),
('Shoista', 'Abdujabborova', 'sh@gmail.com','sh'),
('Dilshoda', 'Toxirova', 'd@gmail.com','d');


INSERT INTO companies(company_name,company_media,company_inform,company_owner) VALUES
('UcharTeam', ARRAY ['https://cdn5.vectorstock.com/i/1000x1000/68/04/letter-k-royal-crown-luxury-logo-design-vector-32696804.jpg'],'Eng zo''r kompanya','d65d3d08-e6a0-43a3-86e6-cb254c643244');
INSERT INTO companies(company_name,company_media,company_inform,company_owner) VALUES
('MurodBuildings', ARRAY ['https://www.mbc.uz/includes/images/new_layout/logo.svg'],'Zo''r kompanya','7c6a8ae8-7096-45c2-b52a-31f4beaa4c8b');
INSERT INTO companies(company_name,company_media,company_inform,company_owner) VALUES
('Avenue', ARRAY ['https://capitalhotelgroup.imgix.net/b48ad210d2113e5bf76c754a41419f17/579864eb0305a8.14228714.png?ixlib=php-1.2.1&s=6b9cda46e6722a8592a60c355fe77504'],'Sizga yoqadigan','fb416e5f-d466-4be2-a443-fe4e8580dc4b');

INSERT INTO complexes(complex_name,complex_media,complex_inform,complex_company) VALUES
('UcharTeam Oldinga', ARRAY ['https://images.unsplash.com/photo-1562660474-d20c6b33478e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dGFsbGVzdCUyMGJ1aWxkaW5nfGVufDB8fDB8fA%3D%3D&w=1000&q=80'], 'mazza qilib yashen','f9385217-0c19-4c7c-9907-d552bff19dfc'),
('UcharTeam Olg''a', ARRAY ['https://www.civitatis.com/blog/wp-content/uploads/2021/09/edificios-altos-mundo.jpg'], 'mazza qilib yashen','f9385217-0c19-4c7c-9907-d552bff19dfc'),
('MurodBuildings Nest One', ARRAY ['https://www.gazeta.uz/media/img/2020/03/dbT6Xw15832233644022_b.jpg'], 'soltib olish kam bo''misiz','021e2827-0f5c-4df9-99bf-d988061288fe'),
('MurodBuildings Nest Two', ARRAY ['https://www.mbc.uz/files/images/optimized/opt__1600__6ddf4a1fad8de194bda93008ffc236c4_70.jpg700/700'], 'soltib olish kam bo''misiz','021e2827-0f5c-4df9-99bf-d988061288fe'),
('Mirobod Avenue', ARRAY ['https://mirabad.uz/upload/kelnik.adminpage/faf/faf7854c28253b616df062213da1f9f9.jpg'], 'ko''ring va sotib oling','99a0437e-7c95-49b8-a446-8da5eb537abd'),
('Yashnobod Avenue', ARRAY ['https://mirabad.uz/upload/resize_cache/resized/w2760/933901ef0233fc82d20f86d7ebb23352.jpg'], 'ko''ring va sotib oling','99a0437e-7c95-49b8-a446-8da5eb537abd');

INSERT INTO houses(house_floor,house_room,house_kvm,house_kvm_sum,house_media,house_inform,house_complex) VALUES
(1,10,100,10000000,ARRAY ['https://ik.imagekit.io/tvlk/apr-asset/TzEv3ZUmG4-4Dz22hvmO9NUDzw1DGCIdWl4oPtKumOg=/hotels/51000000/50880000/50878600/50878533/c2f482b9_z.jpg?tr=q-40,c-at_max,w-740,h-500&_src=imagekit'],'ko''ring va baho bering','df285c98-0f8f-43df-9b89-315d57e7e4ce'),
(7,6,100,5000000,ARRAY ['https://i.pinimg.com/originals/9a/af/78/9aaf783209e670d72b883dbde6c0f4c0.jpg'],'ko''ring va baho bering','df285c98-0f8f-43df-9b89-315d57e7e4ce'),
(77,4,100,70000000,ARRAY ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMHIi5ug5LktZX4gn2u3ixMN-OuRciRhD9iP_aHKv9zmtY4HPRoumKGnABHqq8QB4W0TQ&usqp=CAU'],'ko''ring va baho bering','df285c98-0f8f-43df-9b89-315d57e7e4ce'),
(5,10,100,10000000,ARRAY ['https://image.winudf.com/v2/image1/Y29tLmVsZ2VuZHJvaWQuYmlnaG91c2VwbGFuX3NjcmVlbl8wXzE1NjcwODE1NDRfMDM4/screen-0.jpg?fakeurl=1&type=.jpg'],'ko''ring va baho bering','f0574004-0872-42bf-bae6-ace85a0b763c'),
(50,8,100,70000000,ARRAY ['https://i.pinimg.com/originals/af/47/f5/af47f5588a3e230f20be7865192eb878.jpg'],'ko''ring va baho bering','f0574004-0872-42bf-bae6-ace85a0b763c'),
(55,4,100,90000000,ARRAY ['https://i.pinimg.com/originals/8b/a4/16/8ba416ecf5bdb249af02027b5f878188.jpg'],'ko''ring va baho bering','f0574004-0872-42bf-bae6-ace85a0b763c'),
(1,10,90,7000000,ARRAY ['https://miatugcu.com/wp-content/uploads/2020/08/nest-one-offices-2-2.jpg'],'baho bering','db40ce77-80dd-4a27-a2ae-606ef8ac805e'),
(5,4,50,4000000,ARRAY ['https://nestone.uz/img/offices-plans/CBLOK_1.png'],'baho bering','db40ce77-80dd-4a27-a2ae-606ef8ac805e'),
(5,4,70,9000000,ARRAY ['https://cf.bstatic.com/xdata/images/hotel/max1024x768/290760384.jpg?k=d2accbaf387b001986463bad0c50bfb7efaa2d61425e8f3408439cbc1f744b20&o=&hp=1'],'baho bering','b4c0cab0-68da-4346-be60-3acbb75a4050'),
(7,10,90,4000000,ARRAY ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREA6OxqYLNLUEPvnA832rMXWhgqV-l9_8gCg&usqp=CAU'],'baho bering','b4c0cab0-68da-4346-be60-3acbb75a4050'),
(7,10,80,7000000,ARRAY ['https://i.ytimg.com/vi/BYWlOHO5fjw/maxresdefault.jpg'],'zo''rmi','1bd4872c-b49f-4ed0-8a64-a3fd6eadb67c'),
(10,6,50,7000000,ARRAY ['https://www.gazeta.uz/media/img/2020/12/Iu4Rpc16087887703955_b.jpg'],'zo''rmi','1bd4872c-b49f-4ed0-8a64-a3fd6eadb67c'),
(1,8,70,5000000,ARRAY ['https://lh3.googleusercontent.com/proxy/hIs4D5Dfrinfu058EthcxjLCGvju7EcrwFBuY1CMQ0hCOF01918KkXGi2kT4fb4M7gBlMtkshuanAJ2ETsKDK8r0WX9QH5SRGp_BNFADOWO3fTzC'],'zo''rmi','6f2d139f-507f-4707-b96d-5a8c52fbac8d'),
(7,10,90,8000000,ARRAY ['https://mirabad.uz/upload/kelnik.adminpage/58f/58fc4f82e7744362303e092ebd2c15c1.jpg'],'zo''rmi','6f2d139f-507f-4707-b96d-5a8c52fbac8d');

INSERT INTO banks(bank_name,bank_kridit_sum,bank_kridit_time,bank_email,bank_media,bank_inform) VALUES
('UcharTeam bank',9000000000,77,'ut@gmail.com',ARRAY ['https://cdn.cnn.com/cnnnext/dam/assets/131113140736-beautiful-bank-buildings---saxo-bank-horizontal-large-gallery.jpg'],'mazza qilib ishlating qaytarmasezam mayli :)' ),
('Ipoteka bank',2000000000,40,'i@gmail.com',ARRAY ['https://www.ipotekabank.uz/upload/ipoteka-new_big.jpg'],'mazza qilib ishlating qaytarmasezam mayli :)' ),
('Asaka bank',1500000000,40,'a@gmail.com',ARRAY ['https://uznews.uz/upload/cache/57/34/57344a5d067494ec94fe64303269e00b.jpg'],'mazza qilib ishlating qaytarmasezam mayli :)' ),
('Ravnaq bank',1000000000,40,'r@gmail.com',ARRAY ['https://avatars.mds.yandex.net/get-altay/1580511/2a0000016ec9fda9a865dd1faedde590ca34/XXXL'],'mazza qilib ishlating qaytarmasezam mayli :)' ),
('Infin bank',900000000,40,'it@gmail.com',ARRAY ['https://avatars.mds.yandex.net/get-altay/2057543/2a0000016da63b4d999bfa18fd81a631c82f/XXL'],'mazza qilib ishlating qaytarmasezam mayli :)' ),
('Tenge bank',800000000,40,'te@gmail.com',ARRAY ['https://www.spot.uz/media/img/2019/11/JgpzBt15742292588650_b.jpg'],'mazza qilib ishlating qaytarmasezam mayli :)' ),
('Asia Aliance bank',700000000,30,'aa@gmail.com',ARRAY ['https://aab.uz/upload/iblock/418/41823559dcb86e2c065167cf3884aa92.jpg'],'mazza qilib ishlating qaytarmasezam mayli :)' ),
('Kapital bank',600000000,25,'kb@gmail.com',ARRAY ['https://kapitalbank.uz/upload/imager/182c62d862921358613767ce7a30108e.jpg'],'mazza qilib ishlating qaytarmasezam mayli :)' ),
('Usha bank',500000000,20,'ush@gmail.com',ARRAY ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUhX9zdMD-DrxbQccm4bfWGJK7f0bJBwdngw&usqp=CAU'],'mazza qilib ishlating qaytarmasezam mayli :)' ),
('Topvol bank',400000000,15,'tp@gmail.com',ARRAY ['https://bsmedia.business-standard.com/_media/bs/img/article/2020-09/21/full/1600708212-444.jpg'],'mazza qilib ishlating qaytarmasezam mayli :)' ),
('Shude bank',300000000,10,'shu@gmail.com',ARRAY ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiYifStnxcQkVrJXZLv8ABGvuk4Ri25gykww&usqp=CAU'],'mazza qilib ishlating qaytarmasezam mayli :)' ),
('NBU bank',2000000000,30,'tt@gmail.com',ARRAY ['https://www.gazeta.uz/media/img/2017/08/Nz356R15032474538130_b.jpg?r=1510828079'],'mazza qilib ishlating qaytarmasezam mayli :)' ),
('Xalq bank',150000000,7,'x@gmail.com',ARRAY ['https://media.az/file/articles/2020/08/17/1597678571_845cc197a7de9d7.jpg'],'mazza qilib ishlating qaytarmasezam mayli :)' );