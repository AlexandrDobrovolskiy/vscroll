module.exports = `,Запрос параметров карты из РКЦ,,,,,,,,,,,,,,,,,,,,,,,,,,
,GET /cards/{panid},,cards,100,S,"Чтение данных
карты {panid} из
РКЦ",,-,Card,"GET /uapi
2.0/v1/cards/05040000001016",,,,,"-<?xml version=""1.0
encoding=""UTF-8""
standalone=""yes""?>
<card>
<createRecordDate>2018-
10-
24T15:35:17+03:00</createR
ecordDate>
<filialId>FNS4</filialId>
<pan>574999######8199</p
an>
<panId>05040000001016354
57</panId>
<updateRecordDate>2018-
10-
24T17:32:45+03:00</updateR
ecordDate>
</card>",,,,,,,"""
-","Запрос на
просмотр
(GET)
параметров
карты из
РКЦ.",,,,
,,,,,,,,,,35457 HTTP/1.1,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,,,,,,,,,,,
,S,,,,,,,,,,,,,,,,,,,,,,,,,,
,Запрос/изменение статуса карты в ПЦ,,,,,,,,,,,,,,,,,,,,,,,,,,
,"GET
/cards/{panid}/basepara
m/status",,"cards/basepar
am/status",111,S,"Чтение текущего
статуса карты
{panid}/ из БД ПЦ",,-,"Cardstatus
results",GET,,,,,"<?xml version=""1.0""",,,,,,,650,"Запрос на
просмотр
(GET) статуса
карты,
установлен-
ного в ПЦ.",,,,
,,,,,,,,,,/cards/0501000000101622865,,,,,"/encoding=""UTF-8""
standalone=""yes""?>
<cardStatusResult>",,,,,,,,,,,,
,,,,,,,,,,baseparam/status,,,/,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,<create_date>2018-10-,,,,,,,,,,,,
,,,,,,,,,,,,,,,11T21:45:09.769+03:00</cre,,,,,,,,,,,,
,,,,,,,,,,,,,,,"te_date>
<card",>,,,,,,,,,,,
,,,,,,,,,,,,,,,<fiid>FNS1</fiid>,,,,,,,,,,,,
,,,,,,,,,,,,,,,<panid>05010000001016228,,,,,,,,,,,,
,,,,,,,,,,,,,,,"65</panid
</card>
<status",,>,,,,,,,,,,
,,,,,,,,,,,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,<value>1</value>,,,,,,,,,,,,
,,,,,,,,,,,,,,,</status>,,,,,,,,,,,,
,,,,,,,,,,,,,,,</cardStatusResult,,,>,,,,,,,,,
,"PUT
/cards/{panid}/basepara
m/status",,"cards/basepar
am/status",111,M,"Изменение статуса
карты {panid}/ в БД
ПЦ",,status,"Cardstatus
results",PUT,,,,,"<?xml version=""1.0""",,,,,,,,"Запрос на
изменение
(PUT)
статуса
карты,
установлен-
ного в ПЦ.
В данных
запроса на
изменение
(PUT)
передается
структура
status с
новым
значением
статуса,
который
необходимо
установить.",,,,
,,,,,,,,,,/cards/0501000000101622865,,,,,"/encoding=""UTF-8""
standalone=""yes""?>
<cardStatusResult>",,,,,,,,,,,,
,,,,,,,,,,baseparam/status,,,/,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,<create_date>2018-10-,,,,,,,,,,,,
,,,,,,,,,,,,,,,11T21:47:44.890+03:00</cre,,,,,,,,,,,,
,,,,,,,,,,,,,,,te_date>,,,,,,,,,,,,
,,,,,,,,,,,,,,,<status,,>,,,,,,,,,,
,,,,,,,,,,,,,,,<value>0</value>,,,,,,,,,,,,
,,,,,,,,,,,,,,,</status>,,,,,,,,,,,,
,,,,,,,,,,,,,,,</cardStatusResult,,,>,,,,,,,,,
,,,,,,,,,,,,,,,,,,,,,,,,,,,
,L,,,,,,,,,,,,,,,,,,,,,,,,,,
,Запрос/изменение лимитов карты в ПЦ,,,,,,,,,,,,,,,,,,,,,,,,,,
,"GET
/cards/{panid}/basepara
m/limits",,"cards/basepar
am/limits",112,S,"Чтение лимитов
карты {panid}/ из БД
ПЦ",,-,"CardLimits
Result",GET /uap,,i-,,,"<?xml version=""1.0
encoding=""UTF-8""
standalone=""yes""?>
<cardLimitsResult>
<card>
<panid>05040000001016354
57</panid>
</card>
<limits>
<atmdepositcreditlimit>0005
000</atmdepositcreditlimit>
<atmtimesusedperperiodlimit
>0100</atmtimesusedperperi
dlimit>
<atmtotalccalimit>000005000
0</atmtotalccalimit>
<atmtotalwithdrawalamount>
0000050000</atmtotalwithdr
walamount>",,,,,,,"""
578
0
o
a","Запрос на
просмотр
(GET)
лимитов
карты,
установлен-
ных в ПЦ.",,,,
,,,,,,,,,,2.0/v1/cards/05040000001016,,,,,,,,,,,,,,,,,
,,,,,,,,,,35457/baseparam/limits,,,,,,,,,,,,,,,,,
,,,,,,,,,,HTTP/1.1,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,"<baseaggregatelimit>0000050
000</baseaggregatelimit>
<basetotalccalimit>00000500
00</basetotalccalimit>
<basetotalwithdrawalamount>
0000050000</basetotalwithdr
awalamount>
<postotalccalimit>000005000
0</postotalccalimit>
<postotalpurchaselimit>00000
50000</postotalpurchaselimit
>
<postotalrefundlimit>000005
0000</postotalrefundlimit>
<postotalwithdrawalamount>
0000050000</postotalwithdra
walamount>
<posusagelimit>0100</posusa
gelimit>
</limits>
</cardLimitsResult>",,,,,,,,,,
"PUT
/cards/{panid}/basepara
m/limits","cards/basepar
am/limits",112,M,"Изменение лимитов
карты {panid}/ в БД
ПЦ",limits,"CardLimits
Result","PUT /uapi
2.0/v1/cards/05040000001016",,,,,,,,,,"-<?xml version=""1.0""
encoding=""UTF-8""
standalone=""yes""?>
<cardLimitsResult>
<card>
<fiid>FNS4</fiid>
<pan>574999######8199</p
an>
<panid>05040000001016354
57</panid>
</card>
<limits>
<atmdepositcreditlimit>00080
000</atmdepositcreditlimit>
<atmtimesusedperperiodlimit
>0800</atmtimesusedperperio
dlimit>
<atmtotalccalimit>000005000
0</atmtotalccalimit>
<atmtotalwithdrawalamount>
0000050000</atmtotalwithdra
walamount>
<baseaggregatelimit>0000050
000</baseaggregatelimit>
<basetotalccalimit>00000500
00</basetotalccalimit>
<basetotalwithdrawalamount>
0000050000</basetotalwithdr
awalamount>
<postotalccalimit>000005000
0</postotalccalimit>
<postotalpurchaselimit>00000
50000</postotalpurchaselimit
>
<postotalrefundlimit>000005
0000</postotalrefundlimit>
<postotalwithdrawalamount>
0000050000</postotalwithdra
walamount>
<posusagelimit>0100</posusa
gelimit>
</limits>
</cardLimitsResult>",578,"Запрос на
изменение
(PUT)
лимитов
карты,
установленн
ых в ПЦ.
В данных
запроса на
изменение
(PUT)
передается
структура
limits
с новым
значением
лимита(ов),
который(ые)
необходимо
установить.",,,,,,,,
,,,,,,,35457/baseparam/limits,,,,,,,,,,,,,,,,,,,,
,,,,,,,HTTP/1.1,,,,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,,,,,,,,,,,
,,,,,,,<limits>,,,,,,,,,,,,,,,,,,,,
,,,,,,,<atmtotalccalimit>000008000,,,,,,,,,,,,,,,,,,,,
,,,,,,,0</atmtotalccalimit>,,,,,,,,,,,,,,,,,,,,
,,,,,,,"<atmtotalwithdrawalamount>0
000080000</atmtotalwithdraw",,,,,,,,,,,,,,,,,,,,
,,,,,,,alamount>,,,,,,,,,,,,,,,,,,,,
,,,,,,,</limits>,,,,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,,,,,,,,,,,
"PUT
/cards/advlimits/getcar
dlimits","/cards/advlimi
ts/getcardlimit
s",400,M,"Запрос лимитов
карты в ПЦ","getCard
LimitsR
eq","getCardLi
mitsRes","PUT /uapi
2.0/v1/cards/advlimits/getcard",,,,,,,,,,"-<?xml version=""1.0""
l encoding=""UTF-8""
standalone=""yes""?>
<getCardLimitsRes>
<card>
<fiid>FNS1</fiid>
<panmask>419833######805
0</panmask>
<panid>05010000001016228
65</panid>
</card>
<limits>
<limit>
<limitid>CRDAAWDL</limi
tid>
<value>1300</value>
<cycleType>0</cycleType>
<cycleLength>1</cycleLengt
h>
<currentValue>0</currentVal
ue>
</limit>
<limit>
<limitid>CRDCPFIN</limitid
>
<value>20</value>",,"Запрос на
получение
лимитов
карты,
установлен-
ных в ПЦ.",,,,,,,,
,,,,,,,imits,,,,,,,,,,,,,,,,,,,,
,,,,,,,HTTP/1.1,,,,,,,,,,,,,,,,,,,,
,,,,,,,<getCardLimitsReq>,,,,,,,,,,,,,,,,,,,,
,,,,,,,<card>,,,,,,,,,,,,,,,,,,,,
,,,,,,,<!-,-,,,,,,,,,,,,,,,,,,,
,,,,,,,<pan>4198######8050</pan>,,,,,,,,,,,,,,,,,,,,
,,,,,,,-->,,,,,,,,,,,,,,,,,,,,
,,,,,,,<panmask>419833######805,,,,,,,,,,,,,,,,,,,,
,,,,,,,0</panmask>,,,,,,,,,,,,,,,,,,,,
,,,,,,,<mbr>0</mbr>,,,,,,,,,,,,,,,,,,,,
,,,,,,,<panid>050100000010162286,,,,,,,,,,,,,,,,,,,,
,,,,,,,5</panid>,,,,,,,,,,,,,,,,,,,,
,,,,,,,</card>,,,,,,,,,,,,,,,,,,,,
,,,,,,,</getCardLimitsReq,,,,,,,,>,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,,"<cycleType>0</cycleType>
<cycleLength>1</cycleLengt
h>
<currentValue>1</currentVal
ue>
</limit>
<limit>
<limitid>CRDAPRFD</limiti
d>
<value>100000</value>
<cycleType>0</cycleType>
<cycleLength>1</cycleLengt
h>
<currentValue>0</currentVal
ue>
</limit>
<limit>
<limitid>CRDAADEP</limiti
d>
<startDate>2019-04-
23+03:00</startDate>
<value>21000</value>
<cycleType>0</cycleType>
<cycleLength>1</cycleLengt
h>
<currentValue>0</currentVal
ue>
</limit>
<limit>
<limitid>CRDCAFIN</limiti
d>
<value>20</value>
<cycleType>0</cycleType>
<cycleLength>1</cycleLengt
h>
<currentValue>0</currentVal
ue>
</limit>
<limit>
<limitid>CRDAPWDL</limit
id>
<value>10000</value>
<cycleType>0</cycleType>
<cycleLength>1</cycleLengt
h>
<currentValue>10</currentVa
lue>
</limit>
<limit>
<limitid>CRDAPPUR</limiti
d>
<startDate>2019-07-
16+03:00</startDate>
<endDate>2019-08-
03+03:00</endDate>
<value>100000</value>
<cycleType>1</cycleType>
<cycleLength>2</cycleLengt
h>
<currency>980</currency>
<currentValue>0</currentVal
ue>
</limit>
</limits>
<limitExceptions/>
</getcardlimitsRes>",,,,,,,,,
"PUT
/cards/advlimits/change
cardlimit","/cards/advlimi
ts/changecardl
imit",401,M,"Запрос изменения
лимита карты в
ПЦ","changec
ardlimit
Req","changecard
limitRes","PUT /uapi
2.0/v1/cards/advlimits/change",,,,,,,,,,,"-<?xml version=""1.0""
cencoding=""UTF-8""
standalone=""yes""?>
<changecardlimitRes>
<card>
<fiid>FNS1</fiid>
<panmask>419833######805
0</panmask>
<panid>05010000001016228
65</panid>
</card>
<limit>
<limitid>CRDAAWDL</limi
tid>
<startdate>20190716</startda
te>
<enddate>20290804</enddate
>
<value>100000</value>
<cycletype>0</cycletype>
<cyclelength>1</cyclelength>
<currency>980</currency>",,"Запрос на
изменение
лимитов
карты в ПЦ.",,,,,,,
,,,,,,,ardlimit,,,,,,,,,,,,,,,,,,,,
,,,,,,,HTTP/1.1,,,,,,,,,,,,,,,,,,,,
,,,,,,,<changecardlimitReq>,,,,,,,,,,,,,,,,,,,,
,,,,,,,<card>,,,,,,,,,,,,,,,,,,,,
,,,,,,,<pan>4198######8050</pan>,,,,,,,,,,,,,,,,,,,,
,,,,,,,<!--,,,,,,,,,,,,,,,,,,,,
,,,,,,,<panmask>419833******805,,,,,,,,,,,,,,,,,,,,
,,,,,,,0</panmask>-->,,,,,,,,,,,,,,,,,,,,
,,,,,,,<mbr>0</mbr>,,,,,,,,,,,,,,,,,,,,
,,,,,,,<!--,,,,,,,,,,,,,,,,,,,,
,,,,,,,<panid>050100000010162286,,,,,,,,,,,,,,,,,,,,
,,,,,,,5</panid>-->,,,,,,,,,,,,,,,,,,,,
,,,,,,,"</card>
<limit>",,,,,,,,,,,,,,,,,,,,
,,,,,,,<limitid>CRDAAWDL</limit,,,,,,,,,,,,,,,,,,,,
,,,,,,,id>,,,,,,,,,,,,,,,,,,,,
,,,,,,,<currency>980</currency>,,,,,,,,,,,,,,,,,,,,
,,,,,,,<startdate>20190716</startdat,,,,,,,,,,,,,,,,,,,,
,,,,,,,e,>,,,,,,,,,,,,,,,,,,,
,,,,,,,<enddate>20290804</enddate,,,,,,,,,,,,,,,,,,,,
,,,,,,,>,,,,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,,,,,,,,,,,
,,,,,,,,<value>100000</value,,,,,,,,,,,,,,>,"e
-
-
d
>
>
6
a
h
-
6
t
t
f
i
d
>","<currentvalue>0</currentvalu
e>
</limit>
</changecardlimitRes>",,,
,,,,,,,,<cycletype>0</cycletype,,,,,,,,,,,,>,,,,,,,
,,,,,,,,"<cyclelength>1</cyclelength>
<currentvalue>0</currentvalu",,,,,,,,,,,,,,,,,,,
,,,,,,,,>,,,,,,,,,,,,,,,,,,,
,,,,,,,,<!--<userdata>test</userdata>,,,,,,,,,,,,,,,,,,,
,,,,,,,,-,>,,,,,,,,,,,,,,,,,,
,,,,,,,,</limit>,,,,,,,,,,,,,,,,,,,
,,,,,,,,</changecardlimitReq>,,,,,,,,,,,,,,,,,,,
"PUT
/cards/advlimits/addcar
dlimitexception","/cards/advlimi
ts/addcardlimi
texception",402,M,"Запрос добавления
на карту лимита-
исключения в ПЦ","addCard
LimitEx
eptionR",,"addCardLim
c itException
e Res","PUT /uapi
2.0/v1/cards/advlimits/addcar",,,,,,,,,,,,,,,,"<?xml version=""1.0""
encoding=""UTF-8""
standalone=""yes""?>
<addCardLimitExceptionRes
>
<card>
<fiid>FNS1</fiid>
<panmask>419833******805
0</panmask>
<panid>05010000001016228
65</panid>
</card>
<limitException>
<limitid>CRDAPPUR</limiti
d>
<startDate>20190820</startD
ate>
<endDate>20190822</endDat
e>
<value>50000</value>
<cycleType>0</cycleType>
<cycleLength>1</cycleLengt
h>
<currency>980</currency>
</limitException>
</addCardLimitExceptionRes
>",,"Добавить
исключение
для лимита
карты в ПЦ",
,,,,,,,,limitexception,,,,,,,,,,,,,,,,,,,
,,,,,,q,,HTTP/1.,,,,1,,,,,,,,,,,,,,,
,,,,,,,,<addCardLimitExceptionReq,,,,,,,,,,,,,,,,,,,
,,,,,,,,<card,,,,>,,,,,,,,,,,,,,,
,,,,,,,,<!--,,,,,,,,,,,,,,,,,,,
,,,,,,,,<pan>4198######8050</pan,,,,,,,,,,,,,,,,,,,
,,,,,,,,-->,,,,,,,,,,,,,,,,,,,
,,,,,,,,<panmask>419833******805,,,,,,,,,,,,,,,,,,,
,,,,,,,,0</panmask,,,,,,>,,,,,,,,,,,,,
,,,,,,,,<mbr>0</mbr>,,,,,,,,,,,,,,,,,,,
,,,,,,,,<panid>05010000001016228,,,,,,,,,,,,,,,,,,,
,,,,,,,,"5</panid>
</card>",,,,,,,,,,,,,,,,,,,
,,,,,,,,<limitException>,,,,,,,,,,,,,,,,,,,
,,,,,,,,<limitid>CRDAPPUR</limiti,,,,,,,,,,,,,,,,,,,
,,,,,,,,d,>,,,,,,,,,,,,,,,,,,
,,,,,,,,<currency>980</currency>,,,,,,,,,,,,,,,,,,,
,,,,,,,,<startDate>20190820</startD,,,,,,,,,,,,,,,,,,,
,,,,,,,,te>,,,,,,,,,,,,,,,,,,,
,,,,,,,,<endDate>20190822</endDat,,,,,,,,,,,,,,,,,,,
,,,,,,,,e,>,,,,,,,,,,,,,,,,,,
,,,,,,,,<value>50000</value,,,,,,,,,,,,,>,,,,,,
,,,,,,,,<!--,,,,,,,,,,,,,,,,,,,
,,,,,,,,<cycleType>1</cycleType>-,,,,,,,,,,,,,,-,,,,,
,,,,,,,,>,,,,,,,,,,,,,,,,,,,
,,,,,,,,<!--,,,,,,,,,,,,,,,,,,,
,,,,,,,,<cycleLength>0</cycleLengt,,,,,,,,,,,,,,,,,,,
,,,,,,,,>-->,,,,,,,,,,,,,,,,,,,
,,,,,,,,<!--,,,,,,,,,,,,,,,,,,,
,,,,,,,,<userData>test</userData>-->,,,,,,,,,,,,,,,,,,,
,,,,,,,,</limitException>,,,,,,,,,,,,,,,,,,,
,,,,,,,,</addCardLimitExceptionReq,,,,,,,,,,,,,,,,,,,
,,,,,,,,>,,,,,,,,,,,,,,,,,,,
"PUT
/cards/advlimits/orderc
hangecardlimit","/cards/advlimi
ts/orderchang
ecardlimit",403,M,"Заказ изменения
лимитов карты","orderch
ngecardl
mitReq",,"a orderchange
i cardlimitRe
s","PUT /uapi
2.0/v1/cards/advlimits/orderch",,,,,,,,,,,,,,,,"<?xml version=""1.0""
encoding=""UTF-8""
standalone=""yes""?>
<orderchangecardlimitRes>
<card>
<fiid>FNS1</fiid>
<panmask>419833######805
0</panmask>
<panid>05010000001016228
65</panid>
<orderstatus>0</orderstatus>
<orderid>20190829000064</
orderid>
</card>
</orderchangecardlimitRes>",,"Оформление
заказа
изменения
лимита карты",
,,,,,,,,angecardlim,,,,,,it,,,,,,,,,,,,,
,,,,,,,,HTTP/1.,,,,1,,,,,,,,,,,,,,,
,,,,,,,,<orderchangecardlimitReq>,,,,,,,,,,,,,,,,,,,
,,,,,,,,<card>,,,,,,,,,,,,,,,,,,,
,,,,,,,,<pan,,,,,,,,,,,,,,,,,,,
,,,,,,,,>4198######8050</pan>,,,,,,,,,,,,,,,,,,,
,,,,,,,,<!--,,,,,,,,,,,,,,,,,,,
,,,,,,,,<panmask>419833******805,,,,,,,,,,,,,,,,,,,
,,,,,,,,0</panmask>-->,,,,,,,,,,,,,,,,,,,
,,,,,,,,<mbr>0</mbr>,,,,,,,,,,,,,,,,,,,
,,,,,,,,<!--,,,,,,,,,,,,,,,,,,,
,,,,,,,,<panid>05010000001016228,,,,,,,,,,,,,,,,,,,
,,,,,,,,5</panid>--,,,,,,>,,,,,,,,,,,,,
,,,,,,,,</card>,,,,,,,,,,,,,,,,,,,
,,,,,,,,<actiontype>C</actiontype>,,,,,,,,,,,,,,,,,,,
,,,,,,,,<limit,,,>,,,,,,,,,,,,,,,,
,,,,,,,,<limitid>CRDAPPUR</limiti,,,,,,,,,,,,,,,,,,,
,,,,,,,,d,>,,,,,,,,,,,,,,,,,,
,,,,,,,,<currency>980</currency>,,,,,,,,,,,,,,,,,,,
,,,,,,,,<!--,,,,,,,,,,,,,,,,,,,
,,,,,,,,<startdate>20190829</startda,,,,,,,,,,,,,,,,,,,
,,,,,,,,e>--,,>,,,,,,,,,,,,,,,,,
,,,,,,,,<!--,,,,,,,,,,,,,,,,,,,
,,,,,,,,<enddate>20190829</enddate,,,,,,,,,,,,,,,,,,,
,,,,,,,,>-->,,,,,,,,,,,,,,,,,,,
,,,,,,,,<value>20000</value,,,,,,,,,,,,,>,,,,,,
,,,,,,,,<cycletype>0</cycletype,,,,,,,,,,,,>,,,,,,,
,,,,,,,,"<cyclelength>1</cyclelength>
<currentvalue>20000</curren",,,,,,,,,,,,,,,,,,,
,,,,,,,,value>,,,,,,,,,,,,,,,,,,,
,,,,,,,,<!--,,,,,,,,,,,,,,,,,,,
,,,,,,,,<userdata>test</userdata>-->,,,,,,,,,,,,,,,,,,,
,,,,,,,,</limit>,,,,,,,,,,,,,,,,,,,
,,,,,,,,</orderchangecardlimitReq>,,,,,,,,,,,,,,,,,,,
"PUT
/cardprod/changecardp
rodlimit","/cardprod/cha
ngecardprodli
mit",411,M,"Запрос изменения
лимита
картпродукта","changec
rdprodli
mitReq",,"achangecardp
rodlimitRes",<changecardprodlimitReq>,,,,,,,,,,,,,,,,"<?xml version=""1.0""
encoding=""UTF-8""
standalone=""yes""?>
<changecardprodlimitRes>
<fiid>FNS1</fiid>
<prefix>572901101</prefix>
<actionstatus>C</actionstatus
>
<limit>",,"Запрос
изменения
лимита
картпродукта",
,,,,,,,,<pre,,,,,,,,,,,,,,,,,,,
,,,,,,,,ix>572901101</prefix>,,,,,,,,,,,,,,,,,,,
,,,,,,,,<act,,,,,,,,,,,,,,,,,,,
,,,,,,,,ontype>D</actiontype>,,,,,,,,,,,,,,,,,,,
,,,,,,,,<limit>,,,,,,,,,,,,,,,,,,,
,,,,,,,,<limitid>CRDCAFIN</limiti,,,,,,,,,,,,,,,,,,,
,,,,,,,,>,,,,,,,,,,,,,,,,,,,
,,,,,,,,<value>20000</value,,,,,,,,,,,,,,,,,,,
,,,,,,,,<cycletype>0</cycletype,,,,,,,,,,,,>,,,,,,,
,,,,,,,,,,,,,,,,,,,,,,,,,,,
,,,,,,,,,<cyclelength>1</cyclelength,,,,,,,,,,,,>,"<limitid>CRDCAFIN</limiti
d>
<value>20</value>
<cycletype>0</cycletype>
<cyclelength>1</cyclelength>
</limit>
</changecardprodlimitRes>",,,,,
,,,,,,,,,<currency>980</currency,,,,,,,,,,>,,,,,,,,
,,,,,,,,,</limit>,,,,,,,,,,,,,,,,,,
,,,,,,,,,</changecardprodlimitReq>,,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,,,,,,,,,,,
"PUT
/cardprod/orderchange
cardlimitbyprod","/cardprod/ord
erchangecardl
imitbyprod",412,M,"Заказ изменения
лимита
карт картпродукта","ordercha
ngecardli
mitbypro",,,"orderchange
cardlimitby
prodRes","PUT /uapi-2.0/v1/
cardprod/orderchangecardlimit",,,,,,,,,,,,,"<?xml version=""1.0""
encoding=""UTF-8""
standalone=""yes""?>
<orderchangecardlimitbyprod
Res>
<fiid>FNS1</fiid>
<prefix>419833101</prefix>
<orderstatus>0</orderstatus>
<orderid>20190822000042</
orderid>
</orderchangecardlimitbyprod
Res>",,"Оформление
заказа
изменения
лимита карт
картпродукта",,,
,,,,,,,,,byprod,,,,,,,,,,,,,,,,,,
,,,,,,dReq,,,HTTP/1.,,,,1,,,,,,,,,,,,,,
,,,,,,,,,<orderchangecardlimitbyprod,,,,,,,,,,,,,,,,,,
,,,,,,,,,Req>,,,,,,,,,,,,,,,,,,
,,,,,,,,,"<prefix>419833101</prefix>
<actiontype>C</actiontype",,,,,,,,,,,,>,,,,,,
,,,,,,,,,<limit>,,,,,,,,,,,,,,,,,,
,,,,,,,,,<limitid>CRDAPPUR</limit,,,,,,,,,,,,i,,,,,,
,,,,,,,,,d,>,,,,,,,,,,,,,,,,,
,,,,,,,,,<value>37000</value>,,,,,,,,,,,,,,,,,,
,,,,,,,,,<cycletype>0</cycletype>,,,,,,,,,,,,,,,,,,
,,,,,,,,,<cyclelength>1</cyclelength,,,,,,,,,,,,>,,,,,,
,,,,,,,,,<currency>980</currency,,,,,,,,,,>,,,,,,,,
,,,,,,,,,</limit>,,,,,,,,,,,,,,,,,,
,,,,,,,,,</orderchangecardlimitbypro,,,,,,,,,,,,d,,,,,,
,,,,,,,,,Req>,,,,,,,,,,,,,,,,,,
"PUT
/cards/advlimits/getcar
dlimitshistory","/cards/advlimi
ts/getcardlimit
shistory",413,M,"Запрос истории
лимитов карты","getcardli
mitshisto
ryReq",,,"getcardlimit
shistoryRes",PUT /uapi-2.0/v1/,,,,,,,,,,,,,"<?xml version=""1.0""
encoding=""UTF-8""
standalone=""yes""?>
<getcardlimitshistoryRes>
<card>
<fiid>FNS1</fiid>
<panmask>419833######805
0</panmask>
<panid>05010000001016228
65</panid>
</card>
<limitshistory>
<limitid>CRDCPFIN</limitid
>
<orderid>0</orderid>
<startdate>2019-07-
25T00:00:00+03:00</startdate
>
<enddate>2019-08-
25T00:00:00+03:00</enddate
>
<value>10</value>
<cycletype>0</cycletype>
<cyclelength>1</cyclelength>
<currentvalue>5</currentvalu
e>
<flagexception>N</flagexcep
tion>
<action>C</action>
<orderstatus>1</orderstatus>
<rid>0</rid>
<redrecno>0</redrecno>
</limitshistory>
<limitshistory>
<limitid>CRDCPFIN</limitid
>
<orderid>0</orderid>
<startdate>2019-07-
25T00:00:00+03:00</startdate
>
<enddate>2019-08-
25T00:00:00+03:00</enddate
>
<value>10</value>
<cycletype>0</cycletype>
<cyclelength>1</cyclelength>
<currentvalue>5</currentvalu
e>
<flagexception>N</flagexcep
tion>
<action>C</action>
<orderstatus>1</orderstatus>
<rid>0</rid>
<redrecno>0</redrecno>
</limitshistory>
<limitshistory>
<limitid>CRDCPFIN</limitid
>
<orderid>0</orderid>
<startdate>2019-07-
25T00:00:00+03:00</startdate
>
<enddate>2019-08-
25T00:00:00+03:00</enddate
>",,"Получить
историю
изменений
лимитов
карты (за
период, по
всем
лимитам/ по
лимиту, по
всем заказам:
выполненны
м заказам;
невыполненн
ым заказам.",,,
,,,,,,,,,/cards/advlimits/getcardlimitsh,,,,,,,,,,,,,,,,,,
,,,,,,,,,istory,,,,,,,,,,,,,,,,,,
,,,,,,,,,HTTP/1.,,,,1,,,,,,,,,,,,,,
,,,,,,,,,<getcardlimitshistoryReq>,,,,,,,,,,,,,,,,,,
,,,,,,,,,<card>,,,,,,,,,,,,,,,,,,
,,,,,,,,,<pan>4198331013428050</pa,,,,,,,,,,,,,,,,,,
,,,,,,,,,n,>,,,,,,,,,,,,,,,,,
,,,,,,,,,<!--,,,,,,,,,,,,,,,,,,
,,,,,,,,,<panmask>419833******80,,,,,,,,,,,,5,,,,,,
,,,,,,,,,0</panmask>-->,,,,,,,,,,,,,,,,,,
,,,,,,,,,<mbr>0</mbr>,,,,,,,,,,,,,,,,,,
,,,,,,,,,<!--,,,,,,,,,,,,,,,,,,
,,,,,,,,,<panid>050100000010162286,,,,,,,,,,,,,,,,,,
,,,,,,,,,5</panid>-->,,,,,,,,,,,,,,,,,,
,,,,,,,,,</card,,,,,>,,,,,,,,,,,,,
,,,,,,,,,<limitid>CRDCPFIN</limiti,,,,,,,,,,,,d,,,,,,
,,,,,,,,,>,,,,,,,,,,,,,,,,,,
,,,,,,,,,</getcardlimitshistoryReq,,,,,,,,,,>,,,,,,,,
,,,,,,,,,,,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,,,,,,,,,,,
,,,,,,,,"<value>10</value>
<cycletype>0</cycletype>
<cyclelength>1</cyclelength>
<currentvalue>5</currentvalu
e>
<flagexception>N</flagexcep
tion>
<action>C</action>
<orderstatus>1</orderstatus>
<rid>0</rid>
<redrecno>0</redrecno>
</limitshistory>
<limitshistory>
<limitid>CRDCPFIN</limitid
>
<orderid>0</orderid>
<startdate>2019-07-
25T00:00:00+03:00</startdate
>
<enddate>2019-08-
25T00:00:00+03:00</enddate
>
<value>10</value>
<cycletype>0</cycletype>
<cyclelength>1</cyclelength>
<currentvalue>5</currentvalu
e>
<flagexception>N</flagexcep
tion>
<action>C</action>
<orderstatus>1</orderstatus>
<rid>0</rid>
<redrecno>0</redrecno>
</limitshistory>
<limitshistory>
<limitid>CRDCPFIN</limitid
>
<orderid>0</orderid>
<startdate>2019-07-
25T00:00:00+03:00</startdate
>
<enddate>2019-08-
25T00:00:00+03:00</enddate
>
<value>10</value>
<cycletype>0</cycletype>
<cyclelength>1</cyclelength>
<currentvalue>5</currentvalu
e>
<flagexception>N</flagexcep
tion>
<action>C</action>
<orderstatus>1</orderstatus>
<rid>0</rid>
<redrecno>0</redrecno>
</limitshistory>
<limitshistory>
<limitid>CRDCPFIN</limitid
>
<orderid>0</orderid>
<startdate>2019-07-
25T00:00:00+03:00</startdate
>
<enddate>2019-08-
25T00:00:00+03:00</enddate
>
<value>10</value>
<cycletype>0</cycletype>
<cyclelength>1</cyclelength>
<currentvalue>5</currentvalu
e>
<flagexception>N</flagexcep
tion>
<action>C</action>
<orderstatus>1</orderstatus>
<rid>0</rid>
<redrecno>0</redrecno>
</limitshistory>
<limitshistory>
<limitid>CRDCPFIN</limitid
>
<orderid>0</orderid>
<startdate>2019-07-
25T00:00:00+03:00</startdate
>
<enddate>2019-08-
25T00:00:00+03:00</enddate
>
<value>10</value>
<cycletype>0</cycletype>",,,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,,,,,,,,,,,
,,,,,,,,"<cyclelength>1</cyclelength>
<currentvalue>5</currentvalu
e>
<flagexception>N</flagexcep
tion>
<action>C</action>
<orderstatus>1</orderstatus>
<rid>0</rid>
<redrecno>0</redrecno>
</limitshistory>
<limitshistory>
<limitid>CRDCPFIN</limitid
>
<orderid>0</orderid>
<startdate>2019-07-
25T00:00:00+03:00</startdate
>
<enddate>2019-08-
25T00:00:00+03:00</enddate
>
<value>10</value>
<cycletype>0</cycletype>
<cyclelength>1</cyclelength>
<currentvalue>5</currentvalu
e>
<flagexception>N</flagexcep
tion>
<action>C</action>
<orderstatus>1</orderstatus>
<rid>0</rid>
<redrecno>0</redrecno>
</limitshistory>
<limitshistory>
<limitid>CRDCPFIN</limitid
>
<orderid>0</orderid>
<startdate>2019-07-
25T00:00:00+03:00</startdate
>
<enddate>2019-08-
25T00:00:00+03:00</enddate
>
<value>10</value>
<cycletype>0</cycletype>
<cyclelength>1</cyclelength>
<currentvalue>5</currentvalu
e>
<flagexception>N</flagexcep
tion>
<action>C</action>
<orderstatus>1</orderstatus>
<rid>0</rid>
<redrecno>0</redrecno>
</limitshistory>
<limitshistory>
<limitid>CRDCPFIN</limitid
>
<orderid>0</orderid>
<startdate>2019-07-
25T00:00:00+03:00</startdate
>
<enddate>2019-08-
25T00:00:00+03:00</enddate
>
<value>10</value>
<cycletype>0</cycletype>
<cyclelength>1</cyclelength>
<currentvalue>5</currentvalu
e>
<flagexception>N</flagexcep
tion>
<action>C</action>
<orderstatus>1</orderstatus>
<rid>0</rid>
<redrecno>0</redrecno>
</limitshistory>
<limitshistory>
<limitid>CRDCPFIN</limitid
>
<orderid>0</orderid>
<startdate>2019-07-
25T00:00:00+03:00</startdate
>
<enddate>2019-08-
25T00:00:00+03:00</enddate
>
<value>10</value>
<cycletype>0</cycletype>
<cyclelength>1</cyclelength>",,,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,,,,,,,,,,,
,,,,,,,,,,"<currentvalue>5</currentvalu
e>
<flagexception>N</flagexcep
tion>
<action>C</action>
<orderstatus>1</orderstatus>
<rid>0</rid>
<redrecno>0</redrecno>
</limitshistory>
<limitId>CRDCPFIN</limitI
d>
</getcardlimitshistoryRes>",,,,,,,,,,,,,,,,,
trancontr,,,,,,,,,,,,,,,,,,,,,,,,,,,
Запрос данных транзакционного контракта,,,,,,,,,,,,,,,,,,,,,,,,,,,
"GET
cards/{panid}/basepara
m/trancontr","cards/basepar
am/trancontr",116,S,"Чтение
транзакционного
контракта карты
{panid}/ из БД ПЦ",-,"trancontrR
es_Get","GET /uapi-
2.0/v1/cards/05010000001016
22865/baseparam/trancontr",,,"<?xml version=""1.0""
encoding=""UTF-8""
standalone=""yes""?>
<trancontrRes>
<create_date>2020-03-
08T17:37:57.145+02:00</crea
te_date>
<update_date>2020-03-
08T17:38:00.848+02:00</upd
ate_date>
<card>
<filialId>FNS1</filialId>
<pan>419833######8050</p
an>
<panId>05010000001016228
65</panId>
</card>
<trancontrid>0011</trancontri
d>
</trancontrRes>",,"Получить ид-
р контракта
карты в ПЦ
SVFE.",,,,,,,,,,,,,,,
,,,,,,,HTTP/1.1,,,,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,,,,,,,,,,,
"PUT
cards/{panid}/basepara
m/trancontr","cards/basepar
am/trancontr",116,M,"Изменение
транзакционного
контракта карты
{panid}/ в БД ПЦ","trancont
rReq_P
UT","trancontrR
es_Put","PUT /uapi-
2.0/v1/cards/05010000001016
22865/baseparam/trancontr
HTTP/1.1
<trancontrReq>
<newtrancontrid>0017</newtr
ancontrid>
</trancontrReq>",,,"<?xml version=""1.0""
encoding=""UTF-8""
standalone=""yes""?>
<trancontrRes>
<card>
<filialId>FNS1</filialId>
<pan>419833######8050</p
an>
<panId>05010000001016228
65</panId>
</card>
<trancontrid>0017</trancontri
d>
</trancontrRes>",,"Установить
ид-р
контракта
карты в ПЦ
SVFE",,,,,,,,,,,,,,,
transcheme,,,,,,,,,,,,,,,,,,,,,,,,,,,
Запрос данных транзакционной схемы,,,,,,,,,,,,,,,,,,,,,,,,,,,
"GET
cards/{panid}/basepara
m/transcheme","cards/basepar
am/transche
me",117,S,"Чтение
транзакционной
схемы карты
{panid}/ из БД ПЦ",-,"transcheme
Res Get","GET /uapi-
2.0/v1/cards/05010000001016
22865/baseparam/transcheme
HTTP/1.1",,,"<?xml version=""1.0""
encoding=""UTF-8""
standalone=""yes""?>
<transchemeRes>
<create_date>2020-03-
08T17:42:35.789+02:00</crea
te_date>
<update_date>2020-03-
08T17:42:36.080+02:00</upd
ate_date>
<card>
<filialId>FNS1</filialId>
<pan>419833######8050</p
an>
<panId>05010000001016228
65</panId>
</card>
<transchemeid>4</transchem
eid>
</transchemeRes>",,"Получить ид-
р
транзакционн
ой схемы
карты в ПЦ
SVFE.",,,,,,,,,,,,,,,
"PUT
cards/{panid}/basepara
m/transcheme","cards/basepar
am/transche
me",117,M,"Изменение
транзакционной
схемы карты
{panid}/ в БД ПЦ","transche
meReq_
Put","transcheme
Res_Put","PUT /uapi-
2.0/v1/cards/05010000001016
22865/baseparam/transcheme
HTTP/1.1
<transchemeReq>
<newtranschemeid>15</newtr
anschemeid>
</transchemeReq>",,,"<?xml version=""1.0""
encoding=""UTF-8""
standalone=""yes""?>
<transchemeRes>
<card>
<filialId>FNS1</filialId>
<pan>419833######8050</p
an>
<panId>05010000001016228
65</panId>
</card>
<transchemeid>15</transche
meid>
</transchemeRes>",,"Установить
ид-р
транзакционн
ой схемы
карты в ПЦ
SVFE",,,,,,,,,,,,,,,
"GET
/dict/getdictcardlimits","/dict/getdictca
rdlimits",414,S,"Запрос
справочника
лимитов карты",,"getdictcar
dlimitsRes",GET /uapi-,,,"<?xml version=""1.0""
encoding=""UTF-8""
standalone=""yes""?>
<getdictcardlimitsRes>
<reflimits>",,"Получить
справочник
лимитов
карт",,,,,,,,,,,,,,,
,,,,,,,2.0/v1/dict/getdictcardlimits,,,,,,,,,,,,,,,,,,,,
,,,,,,,HTTP/1.1,,,,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,,,,,,,,,,,
,,,,,,,,"<refLimit>
<limitid>CRDAADEP</limiti
d>
<defaultcurrency>980</defaul
tcurrency>
<limitname>ATM
CASH
DEPOSIT</limitname>
<entitytype>1</entitytype>
<essencetype>1</essencetype
>
<cycleflag>Y</cycleflag>
<cycletype>0</cycletype>
<incrementflag>Y</increment
flag>
<rollbackonreversalflag>Y</r
ollbackonreversalflag>
<inheritedflag>Y</inheritedfl
ag>
<psid>BNS1</psid>
<status>1</status>
<limitnamesms>Deposit(AT
M)</limitnamesms>
<description>ATM-
лимиты. Предельная
допустимая накопительная
сумма в ГРИВНЕ для
операций пополнения
счетов карты наличными
через ATM за одни сутки:
</description>
</refLimit>
<refLimit>
<limitid>CRDAAWDL</limi
tid>
<defaultcurrency>980</defaul
tcurrency>
<limitname>ATM
CASH WDL</limitname>
<entitytype>1</entitytype>
<essencetype>1</essencetype
>
<cycleflag>Y</cycleflag>
<cycletype>0</cycletype>
<incrementflag>Y</increment
flag>
<rollbackonreversalflag>Y</r
ollbackonreversalflag>
<inheritedflag>Y</inheritedfl
ag>
<psid>BNS1</psid>
<status>1</status>
<limitnamesms>Gotivka
(ATM)</limitnamesms>
<description>Предельная
допустимая накопительная
сумма в ГРИВНЕ для
операций получения
наличных с дебетных счетов
карты через ATM за одни
сутки:</description>
</refLimit>
<refLimit>
<limitid>CRDAPPUR</limiti
d>
<defaultcurrency>980</defaul
tcurrency>
<limitname>POS
PURCHASE</limitname>
<entitytype>1</entitytype>
<essencetype>1</essencetype
>
<cycleflag>Y</cycleflag>
<cycletype>0</cycletype>
<incrementflag>Y</increment
flag>
<rollbackonreversalflag>Y</r
ollbackonreversalflag>
<inheritedflag>Y</inheritedfl
ag>
<psid>BNS1</psid>
<status>1</status>
<limitnamesms>Kupivla(POS
)</limitnamesms>
<description>Предельная
допустимая накопительная
сумма в ГРИВНЕ на
операции покупки
товаров/услуг по карте через",,,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,,,,,,,,,,,
,,,,,,,,"POS-терминалы за одни
сутки</description>
</refLimit>
<refLimit>
<limitid>CRDAPRFD</limiti
d>
<defaultcurrency>980</defaul
tcurrency>
<limitname>POS
RFND/REPL</limitname>
<entitytype>1</entitytype>
<essencetype>1</essencetype
>
<cycleflag>Y</cycleflag>
<cycletype>0</cycletype>
<incrementflag>Y</increment
flag>
<rollbackonreversalflag>Y</r
ollbackonreversalflag>
<inheritedflag>Y</inheritedfl
ag>
<psid>BNS1</psid>
<status>1</status>
<limitnamesms>Vozvrat/depo
sit(POS)</limitnamesms>
<description>POS-
лимиты. Предельная
допустимая накопительная
сумма в ГРИВНЕ для
операций возврата
товаров/услуг и пополнения
счетов карты через POS-
терминалы за одни сутки
</description>
</refLimit>
<refLimit>
<limitid>CRDAPWDL</limit
id>
<defaultcurrency>980</defaul
tcurrency>
<limitname>POS
CASH WDL</limitname>
<entitytype>1</entitytype>
<essencetype>1</essencetype
>
<cycleflag>Y</cycleflag>
<cycletype>0</cycletype>
<incrementflag>Y</increment
flag>
<rollbackonreversalflag>Y</r
ollbackonreversalflag>
<inheritedflag>Y</inheritedfl
ag>
<psid>BNS1</psid>
<status>1</status>
<limitnamesms>Gotivka(POS
)</limitnamesms>
<description>Предельная
допустимая накопительная
сумма в ГРИВНЕ на
операции получения
наличных с дебетных счетов
карты через POS-терминалы
за одни сутки</description>
</refLimit>
<refLimit>
<limitid>CRDCAFIN</limiti
d>
<defaultcurrency>980</defaul
tcurrency>
<limitname>ATM
TIMES USED PER PERIOD
LIMIT</limitname>
<entitytype>1</entitytype>
<essencetype>2</essencetype
>
<cycleflag>Y</cycleflag>
<cycletype>0</cycletype>
<incrementflag>Y</increment
flag>
<rollbackonreversalflag>Y</r
ollbackonreversalflag>
<inheritedflag>Y</inheritedfl
ag>
<psid>BNS1</psid>
<status>1</status>
<limitnamesms>Kilkist
operaciy(ATM)</limitnames
ms>",,,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,"<description>ATM-
лимиты.&#xD;
Предельное допустимое
накопительное количество
использований карточки для
операций получения
наличных через ATM за
одни сутки</description>
</refLimit>
<refLimit>
<limitid>CRDCPFIN</limitid
>
<defaultcurrency>980</defaul
tcurrency>
<limitname>POS
TIMES USED PER PERIOD
LIMIT</limitname>
<entitytype>1</entitytype>
<essencetype>2</essencetype
>
<cycleflag>Y</cycleflag>
<cycletype>0</cycletype>
<incrementflag>Y</increment
flag>
<rollbackonreversalflag>Y</r
ollbackonreversalflag>
<inheritedflag>Y</inheritedfl
ag>
<psid>BNS1</psid>
<status>1</status>
<limitnamesms>Kilkist
operaciy(POS)</limitnamesm
s>
<description>Предельное
допустимое накопительное
количество использований
карточки для операций через
POS-терминалы за одни
сутки</description>
</refLimit>
</reflimits>
<addcurrencys/>
</getdictcardlimitsRes>",,,,,,,,,,,
"GET
/cardprod/{cardprefix}/
getcardprodlimits","/cardprod/{car
dprefix}/getca
rdprodlimits",415,S,"Запрос лимитов
картпродукта",,"getcardpro
dlimitsRes","GET /uapi
2.0/v1/cardprod/419833101/ge",,,,,,,,,"-<?xml version=""1.0""
encoding=""UTF-8""
standalone=""yes""?>
<getcardprodlimitsRes>
<fiid>FNS1</fiid>
<prefix>419833101</prefix>
<limits>
<limit>
<limitid>CRDAPPUR</limiti
d>
<value>1000</value>
<cycletype>1</cycletype>
<cyclelength>0</cyclelength>
<currency>980</currency>
</limit>
</limits>
</getcardprodlimitsRes>",,"Получить
лимиты
карточного
продукта (по
префиксу)",,,,,,,,,
,,,,,,,tcardprodlimits HTTP/1.1,,,,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,,,,,,,,,,,
BA,,,,,,,,,,,,,,,,,,,,,,,,,,,
Запрос баланса по счету,,,,,,,,,,,,,,,,,,,,,,,,,,,
PUT /accounts/balance,"accounts/bala
nce",180,M,"Запрос баланса по
счету в БД ПЦ","accbalan
ceReq","accbalance
Res",PUT /uapi,,,,,,,,,"-<?xml version=""1.0""
encoding=""UTF-8""
standalone=""yes""?>
<accBalanceRes>
<accountno>26253370724002
</accountno>
<currencyno>980</currencyn
o>
<availbal>490</availbal>
<ledgbal>500</ledgbal>
</accBalanceRes>",,"Запрос на
чтение
текущего
баланса счета
(PUT)
в БД ПЦ.
В данных
запроса
передается
номер счета.",,,,,,,,,
,,,,,,,2.0/v1/accounts/balance,,,,,,,,,,,,,,,,,,,,
,,,,,,,HTTP/1.1,,,,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,,,,,,,,,,,
,,,,,,,<accBalanceReq>,,,,,,,,,,,,,,,,,,,,
,,,,,,,<accountno>26253370724002,,,,,,,,,,,,,,,,,,,,
,,,,,,,</accountno>,,,,,,,,,,,,,,,,,,,,
,,,,,,,</accBalanceReq>,,,,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,,,,,,,,,,,
BC,,,,,,,,,,,,,,,,,,,,,,,,,,,
Запрос баланса по карте,,,,,,,,,,,,,,,,,,,,,,,,,,,
PUT /cards/balance,cards/balance,130,M,"Запрос баланса по
карте в БД ПЦ","balance
Req",balanceRes,"PUT /uapi
2.0/v1/cards/balance HTTP/1.",,,,,,,,,"-<?xml version=""1.0""
1encoding=""UTF-8""
standalone=""yes""?>
<balanceRes>
<tranAuthCarddata>
<panmask>574999******819
9</panmask>
<mbr>0</mbr>
<panid>05040000001016354
57</panid>
</tranAuthCarddata>
<tranAuthBalData>
<authcurrencyno>980</authc
urrencyno>",676,"Запрос на
чтение
текущего
баланса
карты (PUT)
в БД ПЦ.
В данных
запроса
передается
номер счета.",,,,,,,,,
,,,,,,,,,,,,,,,,,,,,,,,,,,,
,,,,,,,<balanceReq,,>,,,,,,,,,,,,,,,,,,
,,,,,,,<tranAuthCardreq>,,,,,,,,,,,,,,,,,,,,
,,,,,,,<panmask>574999******819,,,,,,,,,,,,,,,,,,,,
,,,,,,,9</panmask>,,,,,,,,,,,,,,,,,,,,
,,,,,,,<mbr>0</mbr>,,,,,,,,,,,,,,,,,,,,
,,,,,,,<panid>050400000010163545,,,,,,,,,,,,,,,,,,,,
,,,,,,,7</panid>,,,,,,,,,,,,,,,,,,,,
,,,,,,,</tranAuthCardreq>,,,,,,,,,,,,,,,,,,,,
,,,,,,,</balanceReq>,,,,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,"<authavailableamt>+49000</
authavailableamt>
<authledgeramt>+49000</aut
hledgeramt>
</tranAuthBalData>
<tranAuthResData>
<status>000</status>
<tranid>203686</tranid>
<tranenv>3</tranenv>
<processingcode>7</processi
ngcode>
<terminalid>IBNS4043</term
inalid>
<responsecode>000</respons
ecode>
<trandattim>2018-10-
31T17:43:34.201+02:00</tran
dattim>
<approvalcode>000000</appr
ovalcode>
<invoicenum>000000000000
</invoicenum>
</tranAuthResData>
</balanceRes>",,,,,,,,,,,,,
W,,,,,,,,,,,,,,,,,,,,,,,,,,,
Запрос списания средств с карты,,,,,,,,,,,,,,,,,,,,,,,,,,,
PUT /cards/writeoff,cards/writeoff,131,M,"Запрос списания
средств с карты","writeoff
Req",writeoffRes,PUT /uapi,,,,,,,"-<?xml version=""1.0""
encoding=""UTF-8""
standalone=""yes""?>
<writeoffRes>
<tranAuthCarddata>
<panmask>574999******819
9</panmask>
<mbr>0</mbr>
<panid>05040000001016354
57</panid>
</tranAuthCarddata>
<tranAuthResData>
<status>000</status>
<tranid>204018</tranid>
<tranenv>3</tranenv>
<processingcode>170000</pr
ocessingcode>
<terminalid>IBNS4043</term
inalid>
<responsecode>00</response
code>
<trandattim>2018-11-
05T12:26:44.175+02:00</tran
dattim>
<approvalcode>153659</appr
ovalcode>
<invoicenum>000005153659
</invoicenum>
</tranAuthResData>
<tranAuthAmtdata>
<trancurrencyno>980</trancu
rrencyno>
<tranamt>2</tranamt>
<tranfee>null</tranfee>
<authfee>null</authfee>
<authcurrencyno>980</authc
urrencyno>
<authamt>2</authamt>
<convratetran2auth>null</con
vratetran2auth>
</tranAuthAmtdata>
</writeoffRes>",659,"Запрос на
списания
средств с
карты (PUT).",,,,,,,,,,,
,,,,,,,2.0/v1/cards/writeoff,,,,,,,,,,,,,,,,,,,,
,,,,,,,HTTP/1.1,,,,,,,,,,,,,,,,,,,,
,,,,,,,<writeoffReq,,>,,,,,,,,,,,,,,,,,,
,,,,,,,<tranAuthCardreq>,,,,,,,,,,,,,,,,,,,,
,,,,,,,<panmask>574999******819,,,,,,,,,,,,,,,,,,,,
,,,,,,,9</panmask>,,,,,,,,,,,,,,,,,,,,
,,,,,,,<mbr>0</mbr>,,,,,,,,,,,,,,,,,,,,
,,,,,,,<panid>050400000010163545,,,,,,,,,,,,,,,,,,,,
,,,,,,,7</panid,>,,,,,,,,,,,,,,,,,,,
,,,,,,,</tranAuthCardreq>,,,,,,,,,,,,,,,,,,,,
,,,,,,,<tranAuthAmtreq,,,,>,,,,,,,,,,,,,,,,
,,,,,,,<trancurrencyno>980</trancur,,,,,,,,,,,,,,,,,,,,
,,,,,,,rencyno>,,,,,,,,,,,,,,,,,,,,
,,,,,,,<tranamt>2</tranamt>,,,,,,,,,,,,,,,,,,,,
,,,,,,,<authcurrencyno>980</authcu,,,,,,,,,,,,,,,,,,,,
,,,,,,,rrencyno,>,,,,,,,,,,,,,,,,,,,
,,,,,,,<authamt>2</authamt,,,,,,>,,,,,,,,,,,,,,
,,,,,,,</tranAuthAmtreq>,,,,,,,,,,,,,,,,,,,,
,,,,,,,</writeoffReq>,,,,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,,,,,,,,,,,
D,,,,,,,,,,,,,,,,,,,,,,,,,,,
Запрос на зачисление средств на карту,,,,,,,,,,,,,,,,,,,,,,,,,,,
PUT /cards/deposit,cards/deposit,132,M,"Запрос зачисления
средств на карту","depositR
eq",depositRes,PUT /uapi-2.0/v1/cards/deposi,,,,,,,"t<?xml version=""1.0""
encoding=""UTF-8""
standalone=""yes""?>
<depositRes>
<tranAuthCarddata>
<panmask>574999******819
9</panmask>
<mbr>0</mbr>
<panid>05040000001016354
57</panid>
</tranAuthCarddata>
<tranAuthResData>
<status>000</status>
<tranid>204023</tranid>
<tranenv>3</tranenv>
<processingcode>270000</pr
ocessingcode>",760,"Запрос на
зачисление
средств на
карту (PUT).",,,,,,,,,,,
,,,,,,,HTTP/1.1,,,,,,,,,,,,,,,,,,,,
,,,,,,,<depositReq>,,,,,,,,,,,,,,,,,,,,
,,,,,,,<tranAuthCardreq>,,,,,,,,,,,,,,,,,,,,
,,,,,,,<panmask>574999******819,,,,,,,,,,,,,,,,,,,,
,,,,,,,9</panmask>,,,,,,,,,,,,,,,,,,,,
,,,,,,,<mbr>0</mbr>,,,,,,,,,,,,,,,,,,,,
,,,,,,,<panid>050400000010163545,,,,,,,,,,,,,,,,,,,,
,,,,,,,7</panid,>,,,,,,,,,,,,,,,,,,,
,,,,,,,</tranAuthCardreq>,,,,,,,,,,,,,,,,,,,,
,,,,,,,<tranAuthAmtreq,,,,>,,,,,,,,,,,,,,,,
,,,,,,,<trancurrencyno>980</trancur,,,,,,,,,,,,,,,,,,,,
,,,,,,,rencyno>,,,,,,,,,,,,,,,,,,,,
,,,,,,,<tranamt>3</tranamt>,,,,,,,,,,,,,,,,,,,,
,,,,,,,<authcurrencyno>980</authcu,,,,,,,,,,,,,,,,,,,,
,,,,,,,rrencyno,>,,,,,,,,,,,,,,,,,,,
,,,,,,,<authamt>3</authamt,,,,,,>,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,,,,,,,,,,,
,,,,,,,</tranAuthAmtreq>,,,,,,,,,,"<terminalid>IBNS4043</term
inalid>
<responsecode>00</response
code>
<trandattim>2018-11-
05T12:50:22.589+02:00</tran
dattim>
<approvalcode>157472</appr
ovalcode>
<invoicenum>000005157472
</invoicenum>
</tranAuthResData>
<tranAuthAmtdata>
<trancurrencyno>980</trancu
rrencyno>
<tranamt>3</tranamt>
<tranfee>null</tranfee>
<authfee>null</authfee>
<authcurrencyno>980</authc
urrencyno>
<authamt>3</authamt>
<convratetran2auth>null</con
vratetran2auth>
</tranAuthAmtdata>
</depositRes>",,,,,,,,,,
,,,,,,,</depositReq,,,>,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,,,,,,,,,,,
CT,,,,,,,,,,,,,,,,,,,,,,,,,,,
Отмена транзакции по карте,,,,,,,,,,,,,,,,,,,,,,,,,,,
PUT /cards/canceltran,"cards/canceltr
an",133,,"Отмена транзакции
по карте","canceltr
anreq","canceltranr
es",PUT /uapi,,,,,,,,,,"-<?xml version=""1.0""
encoding=""UTF-8""
standalone=""yes""?>
<canceltranres>
<requestidCancel>95</reques
tidCancel>
<tranAuthCarddata>
<panmask>574999******819
9</panmask>
<mbr>0</mbr>
<panid>05040000001016354
57</panid>
</tranAuthCarddata>
<tranAuthResData>
<status>000</status>
<tranid>924966</tranid>
<tranenv>3</tranenv>
<processingcode>270000</pr
ocessingcode>
<terminalid>IBNS4043</term
inalid>
<responsecode>00</response
code>
<trandattim>2018-11-
05T17:52:26.146+02:00</tran
dattim>
<approvalcode>000000</appr
ovalcode>
<invoicenum>000000000000
</invoicenum>
</tranAuthResData>
<tranAuthAmtdata>
<trancurrencyno>980</trancu
rrencyno>
<tranamt>3</tranamt>
<tranfee>null</tranfee>
<authfee>null</authfee>
<authcurrencyno>980</authc
urrencyno>
<authamt>3</authamt>
<convratetran2auth>null</con
vratetran2auth>
</tranAuthAmtdata>
</canceltranres>",,"Запрос (PUT)
на отмену
транзакции
(зачисление
или
списание) по
карте в ПЦ.",,,,,,,,
,,,,,,,2.0/v1/cards/canceltra,,,,,,,n,,,,,,,,,,,,,
,,,,,,,<canceltranreq,,,,>,,,,,,,,,,,,,,,,
,,,,,,,<requestidCancel>95</request,,,,,,,,,,,,,,,,,,,,
,,,,,,,idCancel,,>,,,,,,,,,,,,,,,,,,
,,,,,,,<tranAuthCardreq>,,,,,,,,,,,,,,,,,,,,
,,,,,,,<panmask>574999******81,,,,,,,,,9,,,,,,,,,,,
,,,,,,,9</panmask>,,,,,,,,,,,,,,,,,,,,
,,,,,,,<mbr>0</mbr>,,,,,,,,,,,,,,,,,,,,
,,,,,,,<panid>050400000010163545,,,,,,,,,,,,,,,,,,,,
,,,,,,,7</panid,,>,,,,,,,,,,,,,,,,,,
,,,,,,,</tranAuthCardreq>,,,,,,,,,,,,,,,,,,,,
,,,,,,,<tranAuthAmtreq,,,,,,>,,,,,,,,,,,,,,
,,,,,,,<trancurrencyno>980</trancur,,,,,,,,,,,,,,,,,,,,
,,,,,,,rencyno>,,,,,,,,,,,,,,,,,,,,
,,,,,,,<tranamt>3</tranamt>,,,,,,,,,,,,,,,,,,,,
,,,,,,,<authcurrencyno>980</authcu,,,,,,,,,,,,,,,,,,,,
,,,,,,,rrencyno,,>,,,,,,,,,,,,,,,,,,
,,,,,,,<authamt>3</authamt,,,,,,,,>,,,,,,,,,,,,
,,,,,,,</tranAuthAmtreq>,,,,,,,,,,,,,,,,,,,,
,,,,,,,</canceltranreq>,,,,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,,,,,,,,,,,
P,,,,,,,,,,,,,,,,,,,,,,,,,,,
Платеж с карты,,,,,,,,,,,,,,,,,,,,,,,,,,,
PUT /cards/payment,"cards/paymen
t",150,M,Платёж с карты,"payment
Req","paymentRe
s",PUT /uapi,,,,,,,,,,"-<?xml version=""1.0""
encoding=""UTF-8""
standalone=""yes""?>
<paymentRes>
<pmtAuthCardres>
<pan>5749991010568199</p
an>
</pmtAuthCardres>
<pmtAmtres>
<pmtAmt>2</pmtAmt>
</pmtAmtres>
<pmtAuthResData>
<status>000</status>
<tranid>205232</tranid>
<terminalid>IBNS4043</term
inalid>",,"Платёж с
карты по pan",,,,,,,,
,,,,,,,2.0/v1/cards/paymen,,,,,,t,,,,,,,,,,,,,,
,,,,,,,HTTP/1.1,,,,,,,,,,,,,,,,,,,,
,,,,,,,<paymentReq>,,,,,,,,,,,,,,,,,,,,
,,,,,,,<pmtAuthCardreq>,,,,,,,,,,,,,,,,,,,,
,,,,,,,<pan>5749991010568199</pa,,,,,,,,,,,,,,,,,,,,
,,,,,,,n>,,,,,,,,,,,,,,,,,,,,
,,,,,,,<expDate>2308</expDate>,,,,,,,,,,,,,,,,,,,,
,,,,,,,<cvv2Cvc2>064</cvv2Cvc2,,,,,,,,,>,,,,,,,,,,,
,,,,,,,</pmtAuthCardreq>,,,,,,,,,,,,,,,,,,,,
,,,,,,,<pmtAmtreq>,,,,,,,,,,,,,,,,,,,,
,,,,,,,<pmtAmt>2</pmtAmt>,,,,,,,,,,,,,,,,,,,,
,,,,,,,</pmtAmtreq>,,,,,,,,,,,,,,,,,,,,
,,,,,,,</paymentReq>,,,,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,"<responsecode>00</response
code>
<trandattim>2018-11-
09T10:58:58.521+02:00</tran
dattim>
<approvalcode>236522</appr
ovalcode>
<invoicenum>000005236522
</invoicenum>
</pmtAuthResData>
</paymentRes",,,,,,,,,,,,
CC,,,,,,,,,,,,,,,,,,,,,,,,,,,
Отмена платежа с карты,,,,,,,,,,,,,,,,,,,,,,,,,,,
PUT /cards/cancelpmt,"cards/cancelp
mt",151,,"Отмена платежа с
карты","cancelp
mtreq","cancelpmtr
es",PUT /uapi,,,,,,,,"-<?xml version=""1.0""
encoding=""UTF-8""
standalone=""yes""?>
<cancelpmtres>
<pmtAuthCardres>
<pan>5749991010568199</p
an>
</pmtAuthCardres>
<pmtAmtres>
<pmtAmt>2</pmtAmt>
</pmtAmtres>
<pmtAuthResData>
<status>000</status>
<tranid>930162</tranid>
<terminalid>IBNS4043</term
inalid>
<responsecode>00</response
code>
<trandattim>2018-11-
09T11:43:33.502+02:00</tran
dattim>
<approvalcode>000000</appr
ovalcode>
<invoicenum>000000000000
</invoicenum>
</pmtAuthResData>
</cancelpmtres>",,"Отмена
платежа с
карты по pan",,,,,,,,,,
,,,,,,,2.0/v1/cards/cancelpm,,,,,t,,,,,,,,,,,,,,,
,,,,,,,HTTP/1.1,,,,,,,,,,,,,,,,,,,,
,,,,,,,<cancelpmtreq>,,,,,,,,,,,,,,,,,,,,
,,,,,,,<requestidCancel>117</reque,,,,,,,,,,,,,,,,,,,,
,,,,,,,stidCancel>,,,,,,,,,,,,,,,,,,,,
,,,,,,,<pmtAuthCardreq>,,,,,,,,,,,,,,,,,,,,
,,,,,,,<pan>5749991010568199</pa,,,,,,,,,,,,,,,,,,,,
,,,,,,,n>,,,,,,,,,,,,,,,,,,,,
,,,,,,,</pmtAuthCardreq>,,,,,,,,,,,,,,,,,,,,
,,,,,,,<pmtAmtreq>,,,,,,,,,,,,,,,,,,,,
,,,,,,,<pmtAmt>2</pmtAmt>,,,,,,,,,,,,,,,,,,,,
,,,,,,,"</pmtAmtreq
</cancelpmtreq>",,,,>,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,,,,,,,,,,,
T,,,,,,,,,,,,,,,,,,,,,,,,,,,
Запрос журнала транзакций карты,,,,,,,,,,,,,,,,,,,,,,,,,,,
"GET
/cards/{panId}/txonline
?begin={yyyy-MM-
dd’T’HH:mm:ss}&end=
{yyyy-MM-
dd’T’HH:mm:ss}&
status=S",cards/txonline,120,S,"Чтение истории
транзакций по карте
{panid}/ из БД
TXONLINE за
период begin÷end
(журнал транзакций
по карте)",,list,"GET /uapi
2.0/v1/cards/05040000001016",,,,,,,,"-<?xml version=""1.0""
encoding=""UTF-8""
standalone=""yes""?>
<list>
<content>
<item
xmlns:xsi=""http://www.w3.or
g/2001/XMLSchema-
instance""
xsi:type=""txObject"">
<accountNo>2625337072400
2</accountNo>
<approvalCode>236405</app
rovalCode>
<messageType>0210</messa
geType>
<pan>574999######8199</p
an>
<responceCode>0</responce
Code>
<retailId>IBNS4043</retailId
>
<retailSICCode>6012</retail
SICCode>
<terminalCity>KYIV</termin
alCity>
<terminalCountry>UKR</ter
minalCountry>
<terminalId>IBNS4043</term
inalId>
<terminalNameLocation>TST
KUSHN UKR KYIV
MOBIPAY_AK1</terminalN
ameLocation>
<tranAmt1>0</tranAmt1>
<tranCode>17</tranCode>
<tranCurrencyCode>0</tranC
urrencyCode>
<tranDateTime>2018-
11-
09T10:50:14+02:00</tranDat
eTime>
<tranValuePCCur>0</tranVal
uePCCur>
<tranValueTranCur>0</tranV
alueTranCur>
</item>",,"Чтение
истории
транзакций
по карте за
период
(журнал
транзакций
по карте)",,,,,,,,,,
,,,,,,,"35457/txonline/?begin=2018
11-09T10:00:00&end=2018-",,,,,,,-,,,,,,,,,,,,,
,,,,,,,11-09T11:00:00&status=S,,,,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,,,,,,,,,,,
,,,,,,,,"<item
xmlns:xsi=""http://www.w3.or
g/2001/XMLSchema-
instance""
xsi:type=""txObject"">
<accountNo>2625337072400
2</accountNo>
<approvalCode>236522</app
rovalCode>
<messageType>0210</messa
geType>
<pan>574999######8199</p
an>
<responceCode>0</responce
Code>
<retailId>IBNS4043</retailId
>
<retailSICCode>6012</retail
SICCode>
<terminalCity>KYIV</termin
alCity>
<terminalCountry>UKR</ter
minalCountry>
<terminalId>IBNS4043</term
inalId>
<terminalNameLocation>TST
KUSHN UKR KYIV
MOBIPAY_AK1</terminalN
ameLocation>
<tranAmt1>2</tranAmt1>
<tranCode>10</tranCode>
<tranCurrencyCode>980</tra
nCurrencyCode>
<tranDateTime>2018-
11-
09T10:58:57+02:00</tranDat
eTime>
<tranValuePCCur>-
2</tranValuePCCur>
<tranValueTranCur>-
2</tranValueTranCur>
</item>
<item
xmlns:xsi=""http://www.w3.or
g/2001/XMLSchema-
instance""
xsi:type=""txObject"">
<accountNo>2625337072400
2</accountNo>
<approvalCode>236522</app
rovalCode>
<messageType>0420</messa
geType>
<pan>574999######8199</p
an>
<responceCode>0</responce
Code>
<retailId>IBNS4043</retailId
>
<retailSICCode>6012</retail
SICCode>
<terminalCity>KYIV</termin
alCity>
<terminalCountry>UKR</ter
minalCountry>
<terminalId>IBNS4043</term
inalId>
<terminalNameLocation>TST
KUSHN UKR KYIV
MOBIPAY_AK1 \\
REVERSAL</terminalName
Location>
<tranAmt1>2</tranAmt1>
<tranCode>10</tranCode>
<tranCurrencyCode>980</tra
nCurrencyCode>
<tranDateTime>2018-
11-
09T10:58:57+02:00</tranDat
eTime>
<tranValuePCCur>2</tranVal
uePCCur>
<tranValueTranCur>2</tranV
alueTranCur>
</item>
<item
xmlns:xsi=""http://www.w3.or
g/2001/XMLSchema-
instance""
xsi:type=""txObject"">",,,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,,,,,,,,,,,
,,,,,,,,"<accountNo>2625337072400
2</accountNo>
<approvalCode>236625</app
rovalCode>
<messageType>0210</messa
geType>
<pan>574999######8199</p
an>
<responceCode>0</responce
Code>
<retailId>IBNS4043</retailId
>
<retailSICCode>6012</retail
SICCode>
<terminalCity>KYIV</termin
alCity>
<terminalCountry>UKR</ter
minalCountry>
<terminalId>IBNS4043</term
inalId>
<terminalNameLocation>TST
KUSHN UKR KYIV
MOBIPAY_AK1</terminalN
ameLocation>
<tranAmt1>0</tranAmt1>
<tranCode>17</tranCode>
<tranCurrencyCode>0</tranC
urrencyCode>
<tranDateTime>2018-
11-
09T11:06:42+02:00</tranDat
eTime>
<tranValuePCCur>0</tranVal
uePCCur>
<tranValueTranCur>0</tranV
alueTranCur>
</item>
<item
xmlns:xsi=""http://www.w3.or
g/2001/XMLSchema-
instance""
xsi:type=""txObject"">
<accountNo>2625337072400
2</accountNo>
<approvalCode>237301</app
rovalCode>
<messageType>0210</messa
geType>
<pan>574999######8199</p
an>
<responceCode>0</responce
Code>
<retailId>IBNS4043</retailId
>
<retailSICCode>6012</retail
SICCode>
<terminalCity>KYIV</termin
alCity>
<terminalCountry>UKR</ter
minalCountry>
<terminalId>IBNS4043</term
inalId>
<terminalNameLocation>TST
KUSHN UKR KYIV
MOBIPAY_AK1</terminalN
ameLocation>
<tranAmt1>0</tranAmt1>
<tranCode>17</tranCode>
<tranCurrencyCode>0</tranC
urrencyCode>
<tranDateTime>2018-
11-
09T11:52:35+02:00</tranDat
eTime>
<tranValuePCCur>0</tranVal
uePCCur>
<tranValueTranCur>0</tranV
alueTranCur>
</item>
</content>
<number>0</number>
<numberOfElements>5</num
berOfElements>
<size>100</size>
<totalElements>5</totalElem
ents>
<totalPages>1</totalPages>
</list>",,,,,,,,,,,,,,,,,,,
Запрос истории транзакций,,,,,,,,,,,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,,,,,,,,,,,
"PUT
cards/gettransaction
s","/cards/gettrans
actions",122,M,"История
транзакций.","gettrans
actionsR
eq","gettransacti
onsRes",PUT /uapi-2.0/v1/,,,,,,,,,,,,"<?xml version=""1.0""
encoding=""UTF-8""
standalone=""yes""?>
<gettransactionsRes>
<filteroftransactions>
<panmask>419833######805
0</panmask>
<panid>05010000001016228
65</panid>
<period>
<begin>2019-09-
23</begin>
<end>2019-09-
23</end>
</period>
</filteroftransactions>
<transactions>
<transaction>
<pan>4198######8050</pan
>
<mbr>0</mbr>
<tranDateTime>2019-
08-
21T11:57:49.000+0300</tran
DateTime>
<messageType>360</messag
eType>
<responseCode>812</respons
eCode>
<approvalCode>752336</app
rovalCode>
<retailId>IBNS4SV1</retailI
d>
<retailSICCode>6012</retail
SICCode>
<terminalId>IBNS4SV1</ter
minalId>
<terminalNameLocation>SV
GATE ePOS4 UKR KYIV
12B Sverstuka
str.</terminalNameLocation>
<terminalCity>KYIV</termin
alCity>
<terminalCountry>UKR</ter
minalCountry>
<tranCurrencyCode>0</tranC
urrencyCode>
<tranAmt1>0</tranAmt1>
<tranValuePCCur>0</tranVal
uePCCur>
<tranValueTranCur>0</tranV
alueTranCur>
<merchantName>SVGATE
ePOS4</merchantName>
<utrnno>14752336</utrnno>
<operationDirection>noop</o
perationDirection>
<amountInAccountCurrency>
0</amountInAccountCurrenc
y>
<feeDirection>debit</feeDire
ction>
<acquireFeeAmount>0</acqu
ireFeeAmount>
<feIssuerFeeAmount>0</feIss
uerFeeAmount>
<reversal>0</reversal>
<posDataCode>100000U0013
0</posDataCode>
<transactionType>568</trans
actionType>
<pinCheck>0</pinCheck>
<ucMerchantCountry>UKR</
ucMerchantCountry>
<ucMerchantId>IBNS4SV1</
ucMerchantId>
<ucMerchantName>SVGATE
ePOS4</ucMerchantName>
<accountNo>
</accountNo>
<currencyNo>0</currencyNo
>
</transaction>
</transactions>
</gettransactionsRes>",,"Запрос
истории
транзакций.",,,,,,
,,,,,,,/cards/gettransactions,,,,,,,,,,,,,,,,,,,,
,,,,,,,HTTP/1.,,1,,,,,,,,,,,,,,,,,,
,,,,,,,<gettransactionsReq>,,,,,,,,,,,,,,,,,,,,
,,,,,,,<panmask>419833######80,,,,,,,,,,,5,,,,,,,,,
,,,,,,,0</panmask>,,,,,,,,,,,,,,,,,,,,
,,,,,,,<mbr>0</mbr>,,,,,,,,,,,,,,,,,,,,
,,,,,,,<panid>050100000010162286,,,,,,,,,,,,,,,,,,,,
,,,,,,,"5</panid
<period>",,>,,,,,,,,,,,,,,,,,,
,,,,,,,<begin>2019-09-,,,,,,,,,,,,,,,,,,,,
,,,,,,,23</begin>,,,,,,,,,,,,,,,,,,,,
,,,,,,,<end>2019-09-23</end>,,,,,,,,,,,,,,,,,,,,
,,,,,,,</period>,,,,,,,,,,,,,,,,,,,,
,,,,,,,<!--,,,,,,,,,,,,,,,,,,,,
,,,,,,,<terminalId>IBNS4SV2</ter,,,,,,,,,,,,,,,,,,,,
,,,,,,,minalId>-->,,,,,,,,,,,,,,,,,,,,
,,,,,,,</gettransactionsReq,,,,,,,,>,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,,,,,,,,,,,
MR,,,,,,,,,,,,,,,,,,,,,,,,,,,
Установка отметки о регистрации в мобильном приложении,,,,,,,,,,,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,,,,,,,,,,,
PUT /mapp/registry,mapp/registry,310,M,"Установка отметки
о регистрации в
мобильном
приложении","registry
Req",registryRes,PUT /uapi,-,,,,,,"<?xml version=""1.0""
encoding=""UTF-8""
standalone=""yes""?>
<registryRes>
<mobPhone>380502256767</
mobPhone>
<extIdClient>TSTKUSHN</e
xtIdClient>
<extDateReg>2018-11-
12T10:00:00+02:00</extDate
Reg>
<mBankServiceFlag>Y</mBa
nkServiceFlag>
<cardList>
<cardAccountList>
<cardaccountData>
<accountno>26254370724001
</accountno>
<acctstat>3</acctstat>
<accttyp>01</accttyp>
<currencyno>980</currencyn
o>
<mbankServiceflag>Y</mban
kServiceflag>
</cardaccountData>
</cardAccountList>
<cardExpdate>2308</cardEx
pdate>
<cardacctlink>1</cardacctlink
>
<crdstat>1</crdstat>
<crdtyp>MD</crdtyp>
<fiid>FNS4</fiid>
<mbr>0</mbr>
<pan>574999######6982</p
an>
<panid>05040000001016354
65</panid>
<psid>BNS4</psid>
</cardList>
<cardList>
<cardAccountList>
<cardaccountData>
<accountno>26254370724001
</accountno>
<acctstat>3</acctstat>
<accttyp>01</accttyp>
<currencyno>980</currencyn
o>
<mbankServiceflag>Y</mban
kServiceflag>
</cardaccountData>
</cardAccountList>
<cardExpdate>2308</cardEx
pdate>
<cardacctlink>1</cardacctlink
>
<crdstat>1</crdstat>
<crdtyp>MD</crdtyp>
<fiid>FNS4</fiid>
<mbr>0</mbr>
<pan>574999######2603</p
an>
<panid>05040000001016355
07</panid>
<psid>BNS4</psid>
</cardList>
<cardList>
<cardAccountList>
<cardaccountData>
<accountno>26253370724002
</accountno>
<acctstat>3</acctstat>
<accttyp>01</accttyp>
<currencyno>980</currencyn
o>
<mbankServiceflag>Y</mban
kServiceflag>
</cardaccountData>
</cardAccountList>
<cardExpdate>2308</cardEx
pdate>
<cardacctlink>1</cardacctlink
>
<crdstat>1</crdstat>
<crdtyp>MD</crdtyp>
<fiid>FNS4</fiid>
<mbr>0</mbr>
<pan>574999######8199</p
an>",-,"Запрос (PUT)
на установку
отметки о
регистрации
клиента в
мобильном
приложении
(по номеру
мобильного
телефона).",,,,,,,,,,,
,,,,,,,2.0/v1/mapp/registry,,,,,,,,,,,,,,,,,,,,
,,,,,,,HTTP/1.1,,,,,,,,,,,,,,,,,,,,
,,,,,,,<registryReq>,,,,,,,,,,,,,,,,,,,,
,,,,,,,<mobPhone>380502256767<,,,,,,/,,,,,,,,,,,,,,
,,,,,,,mobPhone>,,,,,,,,,,,,,,,,,,,,
,,,,,,,<extIdClient>TSTKUSHN</,,,,,,e,,,,,,,,,,,,,,
,,,,,,,xtIdClient>,,,,,,,,,,,,,,,,,,,,
,,,,,,,<extDateReg>2018-11-,,,,,,,,,,,,,,,,,,,,
,,,,,,,12T10:00:00.000+02:00</ext,,,,,,,,,,,,,,,,,,,,
,,,,,,,DateReg>,,,,,,,,,,,,,,,,,,,,
,,,,,,,</registryReq>,,,,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,"<panid>05040000001016354
57</panid>
<psid>BNS4</psid>
</cardList>
</registryRes>",,,,,,,,,,,,,,,
MC,,,,,,,,,,,,,,,,,,,,,,,,,,,
Снятие отметки о регистрации в мобильном приложении,,,,,,,,,,,,,,,,,,,,,,,,,,,
"PUT
/mapp/cancelregistry","mapp/cancelre
gistry",311,M,"Снятие отметки о
регистрации в
мобильном
приложении","cancelR
egistryre
q","cancelRegis
tryRes",PUT /uapi,-,,,,"<cancelRegistryRes>
<mobPhone>380502256767</
mobPhone>
<extIdClient>TSTKUSHN</e
xtIdClient>
<extDateReg>2018-11-
12T10:00:00+02:00</extDate
Reg>
</cancelRegistryRes>",-,"Запрос (PUT)
на отмену
(удаление
отметки) о
регистрации
клиента в
мобильном
приложении.
Удаляет
запись о
регистрации в
мобильном
приложении.",,,,,,,,,,,,,
,,,,,,,2.0/v1/mapp/cancelregistr,,,y,,,,,,,,,,,,,,,,,
,,,,,,,HTTP/1.1,,,,,,,,,,,,,,,,,,,,
,,,,,,,<cancelRegistryReq>,,,,,,,,,,,,,,,,,,,,
,,,,,,,<mobPhone>380502256767<,,,,/,,,,,,,,,,,,,,,,
,,,,,,,mobPhone,>,,,,,,,,,,,,,,,,,,,
,,,,,,,<extIdClient>TSTKUSHN</,,,,e,,,,,,,,,,,,,,,,
,,,,,,,xtIdClient>,,,,,,,,,,,,,,,,,,,,
,,,,,,,<extDateReg>2018-11-,,,,,,,,,,,,,,,,,,,,
,,,,,,,12T10:00:00.000+02:00</ext,,,,,,,,,,,,,,,,,,,,
,,,,,,,DateReg>,,,,,,,,,,,,,,,,,,,,
,,,,,,,</cancelRegistryReq>,,,,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,,,,,,,,,,,
MG,,,,,,,,,,,,,,,,,,,,,,,,,,,
Запрос списка карт клиента по номеру мобильного телефона,,,,,,,,,,,,,,,,,,,,,,,,,,,
"GET
mapp/getcardsbyphone","mapp/getcards
byphone",320,S,"Запрос списка карт
клиента по номеру
мобильного
телефона",-,"getCardsBy
PhoneRes",GET /uap,i-,,,,"<?xml version=""1.0""
encoding=""UTF-8""
standalone=""yes""?>
<getCardsByPhoneRes>
<mobPhone>380502256767</
mobPhone>
<registryDataList>
<registryData>
<extIdClient>Регистрация
отсутствует</extIdClient>
<extSystemFlagOn>A</extSy
stemFlagOn>
<fiid>9999</fiid>
</registryData>
</registryDataList>
<mBankServiceFlag>Y</mBa
nkServiceFlag>
<cardList>
<cardMBdata>
<cardAccountList>
<cardaccountData>
<accountno>26253370724002
</accountno>
<acctstat>3</acctstat>
<accttyp>01</accttyp>
<currencyno>980</currencyn
o>
<description>*</description>
<mbankServiceflag>Y</mban
kServiceflag>
</cardaccountData>
</cardAccountList>
<cardExpdate>2308</cardEx
pdate>
<cardacctlink>1</cardacctlink
>
<crdstat>1</crdstat>
<crdtyp>MD</crdtyp>
<fiid>FNS4</fiid>
<mbr>0</mbr>
<pan>574999######8199</p
an>
<panid>05040000001016354
57</panid>
<psid>BNS4</psid>
</cardMBdata>
<cardMBdata>
<cardAccountList>
<cardaccountData>
<accountno>26254370724001
</accountno>
<acctstat>3</acctstat>
<accttyp>01</accttyp>
<currencyno>980</currencyn
o>
<description>*</description>
<mbankServiceflag>Y</mban
kServiceflag>
</cardaccountData>
</cardAccountList>
<cardExpdate>2308</cardEx
pdate>
<cardacctlink>1</cardacctlink
>
<crdstat>1</crdstat>
<crdtyp>MD</crdtyp>
<fiid>FNS4</fiid>",-,"Запрос (GET)
списка карт
клиента по
номеру
мобильного
телефона.",,,,,,,,,,,,,
,,,,,,,2.0/v1/mapp/380502256767/g,,,,,,,,,,,,,,,,,,,,
,,,,,,,etcardsbyphone HTTP/1.1,,,,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,,,,"<mbr>0</mbr>
<pan>574999######6982</p
an>
<panid>05040000001016354
65</panid>
<psid>BNS4</psid>
</cardMBdata>
<cardMBdata>
<cardAccountList>
<cardaccountData>
<accountno>26254370724001
</accountno>
<acctstat>3</acctstat>
<accttyp>01</accttyp>
<currencyno>980</currencyn
o>
<description>*</description>
<mbankServiceflag>Y</mban
kServiceflag>
</cardaccountData>
</cardAccountList>
<cardExpdate>2308</cardEx
pdate>
<cardacctlink>1</cardacctlink
>
<crdstat>1</crdstat>
<crdtyp>MD</crdtyp>
<fiid>FNS4</fiid>
<mbr>0</mbr>
<pan>574999######2603</p
an>
<panid>05040000001016355
07</panid>
<psid>BNS4</psid>
</cardMBdata>
</cardList>
</getCardsByPhoneRes>",,,,,,,
MS,,,,,,,,,,,,,,,,,,,,,,,,,,,
Отправка SMS-сообщения,,,,,,,,,,,,,,,,,,,,,,,,,,,
PUT /mapp/sendsms,"/mapp/sendsm
s",330,M,"Отправка SMS-
сообщения","sendSms
Req","sendSmsRe
s",PUT /uapi,,-,,,,,,,,,,,"<?xml version=""1.0""
encoding=""UTF-8""
standalone=""yes""?>
<sendSmsRes>
<mobPhone>380502256767</
mobPhone>
<smsText>Проверка-1
SMS сообщений
UAPI2</smsText>
<idsms>41331</idsms>
<dateRegSMS>2018-11-
12T12:14:41.803+02:00</date
RegSMS>
<statusSMS>0</statusSMS>
</sendSmsRes>",-,"Запрос (PUT)
на
регистрацию
SMS-
сообщения на
отправку по
указанному
номеру
мобильного
телефона.",,,,,
,,,,,,,2.0/v1/mapp/sendsms,,,,,,,,,,,,,,,,,,,,
,,,,,,,HTTP/1.1,,,,,,,,,,,,,,,,,,,,
,,,,,,,<sendSmsReq>,,,,,,,,,,,,,,,,,,,,
,,,,,,,<mobPhone>380502256767</,,,,,,,,,,,,,,,,,,,,
,,,,,,,mobPhone>,,,,,,,,,,,,,,,,,,,,
,,,,,,,<smsText>Проверка-1 SMS,,,,,,,,,,,,,,,,,,,,
,,,,,,,сообщений,,,,,,,,,,,,,,,,,,,,
,,,,,,,UAPI2</smsText>,,,,,,,,,,,,,,,,,,,,
,,,,,,,<smsType>M20</smsType>,,,,,,,,,,,,,,,,,,,,
,,,,,,,</sendSmsReq>,,,,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,,,,,,,,,,,
Заказ отправки SMS,,,,,,,,,,,,,,,,,,,,,,,,,,,
PUT /mapp/sendsmsext,"/mapp/sendsm
sext",340,M,Заказ отправки SMS,"sendsms
extReq","sendsmsext
Res",PUT /uapi,,-,,,,,,,,,,,"<?xml version=""1.0""
encoding=""UTF-8""
standalone=""yes""?>
<sendsmsextRes>
<orderstatus>0</orderstatus>
<smsid>50269</smsid>
<timeregsms>2019-09-
10T10:59:12.323+03:00</tim
eregsms>
<commentstatus>Заказ
принят</commentstatus>
</sendsmsextRes>",,"Заказ (PUT)
на
регистрацию
SMS-
сообщения на
отправку по
указанному
номеру
мобильного
телефона.",,,,,
,,,,,,,2.0/v1/mapp/sendsmsex,,,,,,,,,t,,,,,,,,,,,
,,,,,,,HTTP/1.1,,,,,,,,,,,,,,,,,,,,
,,,,,,,<sendsmsextReq>,,,,,,,,,,,,,,,,,,,,
,,,,,,,<smstype>E01</smstype>,,,,,,,,,,,,,,,,,,,,
,,,,,,,"<!--Ти
сообщения. Cписок",,,,,,,п,,,,,,,,,,,,,
,,,,,,,значений предоставляет,,,,,,,,,,,,,,,,,,,,
,,,,,,,УКРКАРТ--,,,,>,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,,,,,,,,,,,
,,,,,,,<smstext>PanID</smstext>,,,,,,,,,,,,,,,,,,,,
,,,,,,,<!--При,,,,,,,,,,,,,,,,,,,,
,,,,,,,отправке в тексте,,,,,,,,,,,,,,,,,,,,
,,,,,,,изменяются:,,,,,,,,,,,,,,,,,,,,
,,,,,,,? букв,,,,,,ы,,,,,,,,,,,,,,
,,,,,,,кириллицы ?,,,,,,,,,,,,,,,,,,,,
,,,,,,,транслитирируются в,,,,,,,,,,,,,,,,,,,,
,,,,,,,латиницу,,;,,,,,,,,,,,,,,,,,,
,,,,,,,? прочие,,,,,,,,,,,,,,,,,,,,
,,,,,,,запрещенные символ,,,,,,,,,,,,,,,,,,,,
,,,,,,,заменяются на знак вопрос,,,,,,,,,,,,а,,,,,,,,
,,,,,,,(???)-->,,,,,,,,,,,,,,,,,,,,
,,,,,,,<mobphone>380504695050</,,,,,,,,,,,,,,,,,,,,
,,,,,,,mobphone>,,,,,,,,,,,,,,,,,,,,
,,,,,,,</sendsmsextReq>,,,,,,,,,,,,,,,,,,,,
Запрос статуса Заказа отправки SMS,,,,,,,,,,,,,,,,,,,,,,,,,,,
"GET
mapp/{smsid}/sendsms
extstatus","/mapp/{smsis
}/sendsmsexts
tatus",341,S,"Запрос статуса
Заказа отправки
SMS",,"sendsmsext
statusRes",,,,,,,,,,,,,,"<?xml version=""1.0""
encoding=""UTF-8""
standalone=""yes""?>
<sendsmsextstatusRes>
<smsid>43150</smsid>
<commentstatus>Заказ
принят</commentstatus>
<orderstatus>0</orderstatus>",,"Запрос
статуса
Заказа
отправки
SMS.",,,,,
,,,,,,,,,,,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,,,,,,,,,"<timeregsms>2019-01-
22T10:00:11.686+02:00</tim
eregsms>
</sendsmsextstatusRes>",,
COI,,,,,,,,,,,,,,,,,,,,,,,,,,,
Заказ выпуска карты,,,,,,,,,,,,,,,,,,,,,,,,,,,
PUT /cards/orderissue,"cards/orderiss
ue",160,M,Заказ выпуска карты,"orderiss
ueReq","orderissue
Res",<orderissueReq>,,,,,,,,,,,,,,,,,,"<orderissueRes>
<orderstatus>0</orderstatus>
<orderid>14102018000620</
orderid>
<panid>05010000001016340
27</panid>
<commentstatus>Заказ
принят</commentstatus>
</orderissueRes>",,"Заказ
выпуска
карты"
,,,,,,,"<ordertype>2</ordertype>
<opertype>1</opertype",,,,,,,,,,,,,,,>,,,,,
,,,,,,,<prefix>402902101</prefix,,,,,,,,,,,,,,,,>,,,,
,,,,,,,"<pan>4029######1391</pan
<panmask>402901######926",,,,,,,,,,,,,,,,,>,,,
,,,,,,,5</panmask>,,,,,,,,,,,,,,,,,,,,
,,,,,,,<mbr>0</mbr,,,,,,,,,>,,,,,,,,,,,
,,,,,,,"<expdate>2306</expdate
<chiptype>00</chiptype>",,,,,,,,,,,,,,,,>,,,,
,,,,,,,<pintype>0</pintype>,,,,,,,,,,,,,,,,,,,,
,,,,,,,<activationtype>4</activation,,,,,,,,,,,,,,,,,t,,,
,,,,,,,ype>,,,,,,,,,,,,,,,,,,,,
,,,,,,,<issuetype>2</issuetype>,,,,,,,,,,,,,,,,,,,,
,,,,,,,<!--panid>?</panid-->,,,,,,,,,,,,,,,,,,,,
,,,,,,,<!--Для opertype = 3,,,,,,,,,,,,,,,,,,,,
,,,,,,,должно быть заполнено-->,,,,,,,,,,,,,,,,,,,,
,,,,,,,<cardid>1720</cardid,,,,,,,,,,,,,,>,,,,,,
,,,,,,,<issuedate>20181014</issued,,,,,,,,,,,,,,,,,,,,
,,,,,,,ate>,,,,,,,,,,,,,,,,,,,,
,,,,,,,<startdate>20180831</startda,,,,,,,,,,,,,,,,,t,,,
,,,,,,,e,>,,,,,,,,,,,,,,,,,,,
,,,,,,,<trancontrid>0017</trancontr,,,,,,,,,,,,,,,,,i,,,
,,,,,,,d,>,,,,,,,,,,,,,,,,,,,
,,,,,,,<mobphone>380677456570<,,,,,,,,,,,,,,,,,/,,,
,,,,,,,mobphone>,,,,,,,,,,,,,,,,,,,,
,,,,,,,<authenticationtype>4</authe,,,,,,,,,,,,,,,,,,,,
,,,,,,,nticationtype,,,,,,,,>,,,,,,,,,,,,
,,,,,,,<reissuepanid></reissuepanid,,,,,,,,,,,,,,,,,,,,
,,,,,,,>,,,,,,,,,,,,,,,,,,,,
,,,,,,,"<!--PanID переиздаваемой
карты. Для opertype != 2",,,,,,,,,,,,,,,,,,,,
,,,,,,,игнорируется-->,,,,,,,,,,,,,,,,,,,,
,,,,,,,<accountData1,,,,,,,,,,>,,,,,,,,,,
,,,,,,,<accountno>2625123456789,,,,,,,,,,,,,,,,,<,,,
,,,,,,,/accountno>,,,,,,,,,,,,,,,,,,,,
,,,,,,,<currencyno>980</currencyn,,,,,,,,,,,,,,,,,o,,,
,,,,,,,>,,,,,,,,,,,,,,,,,,,,
,,,,,,,<defaultaccount>true</defaul,,,,,,,,,,,,,,,,,t,,,
,,,,,,,account>,,,,,,,,,,,,,,,,,,,,
,,,,,,,<accounttype>SAVING</acc,,,,,,,,,,,,,,,,,o,,,
,,,,,,,unttype>,,,,,,,,,,,,,,,,,,,,
,,,,,,,</accountData1>,,,,,,,,,,,,,,,,,,,,
,,,,,,,</orderissueReq,,,,,,,,,>,,,,,,,,,,,
COIS,,,,,,,,,,,,,,,,,,,,,,,,,,,
Запрос статуса Заказа выпуска карты,,,,,,,,,,,,,,,,,,,,,,,,,,,
"PUT
/cards/orderissuestatus","cards/orderiss
uestatus",161,M,"Запрос статуса
Заказа выпуска
карты","orderiss
uestatus
Req","orderissues
tatusRes",PUT /uapi-,,,,,,,,,,,,,,,,,,"<orderissueStatusRes>
<orderstatus>0</orderstatus>
<orderid>14102018000620</
orderid>
<commentstatus>Заказ
принят</commentstatus>
<panid>05010000001016340
27</panid>
</orderissueStatusRes>",,"Запрос
статуса
Заказа
выпуска
карты"
,,,,,,,2.0/v1/cards/orderissuestatus,,,,,,,,,,,,,,,,,,,,
,,,,,,,HTTP/1.,,,,,1,,,,,,,,,,,,,,,
,,,,,,,<orderissueStatusReq>,,,,,,,,,,,,,,,,,,,,
,,,,,,,<orderid>14102018000620</,,,,,,,,,,,,,,,,,o,,,
,,,,,,,rderid>,,,,,,,,,,,,,,,,,,,,
,,,,,,,<panid>05010000001016340,,,,,,,,,,,,,,,,,2,,,
,,,,,,,7</panid>,,,,,,,,,,,,,,,,,,,,
,,,,,,,<mbr>0</mbr>,,,,,,,,,,,,,,,,,,,,
,,,,,,,</orderissueStatusReq,,,,,,,,,,,,,,,,,,,,
CO3D,,,,,,,,,,,,,,,,,,,,,,,,,,,
Заказ изменения 3Dsecure параметров карты,,,,,,,,,,,,,,,,,,,,,,,,,,,
"PUT
/cards/order3dsecure","cards/order3d
secure",162,M,"Заказ изменения
3Dsecure параметров
карты","order3d
secureR
eq","order3dsec
ureRes",PUT /uapi-,,,,,,,,,,,,,,,,,,"<order3DsecureRes>
<orderstatus>0</orderstatus>
<orderid>13102018000613</
orderid>
<panid>05010000001016226
26</panid>
<commentstatus>Заказ
принят</commentstatus>
</order3DsecureRes>",,"Заказ
изменения
3Dsecure
параметров
карты"
,,,,,,,2.0/v1/cards/order3dsecure,,,,,,,,,,,,,,,,,,,,
,,,,,,,HTTP/1.,,,,,1,,,,,,,,,,,,,,,
,,,,,,,<order3dsecureReq,,,,,,,,,,,>,,,,,,,,,
,,,,,,,<panid>05010000001016226,,,,,,,,,,,,,,,,,2,,,
,,,,,,,6</panid>,,,,,,,,,,,,,,,,,,,,
,,,,,,,<panmask>402902######168,,,,,,,,,,,,,,,,,,,,
,,,,,,,2</panmask>,,,,,,,,,,,,,,,,,,,,
,,,,,,,<authenticationtype>4</authe,,,,,,,,,,,,,,,,,,,,
,,,,,,,nticationtype,,,,,,,,>,,,,,,,,,,,,
,,,,,,,<mobphone>380504392020<,,,,,,,,,,,,,,,,,/,,,
,,,,,,,mobphone>,,,,,,,,,,,,,,,,,,,,
,,,,,,,</order3dsecureReq>,,,,,,,,,,,,,,,,,,,,
CO3DS,,,,,,,,,,,,,,,,,,,,,,,,,,,
Запрос статуса Заказа изменения 3Dsecure параметров карты,,,,,,,,,,,,,,,,,,,,,,,,,,,
"GET
/cards/order3dsecurest
atus","cards/order3d
securestatus",163,M,"Запрос статуса
заказа изменения
3Dsecure параметров
карты",,"order3dsec
urestatusR
es",GET,,,,,,,,,,,,,,,,,,"<order3dsecurestatusRes>
<orderstatus>0</orderstatus>
<orderid>14102018000621</
orderid>
<panid>05010000001016022
30</panid>
<commentstatus>Заказ
принят</commentstatus>
</order3dsecurestatusRes>",,"Запрос
статуса заказа
изменения
3Dsecure
параметров
карты"
,,,,,,,/uapi-,,,,,,,,,,,,,,,,,,,,
,,,,,,,2.0/v1/cards/14102018000621/,,,,,,,,,,,,,,,,,,,,
,,,,,,,order3dsecurestatus,,,,,,,,,,,,,,,,,,,,
,,,,,,,HTTP/1.,,,,,1,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,,,,,,,,,,,
CPINS,,,,,,,,,,,,,,,,,,,,,,,,,,,
Запрос на изменение PIN карты и его отправка SMS (3.0.0.5),,,,,,,,,,,,,,,,,,,,,,,,,,,
"PUT /cards/changepin
(3.0.0.5)","cards/changep
in",136,M,"Изменение PIN
карты в БД ПЦSVFE
и отправка его SMS","changep
inReq","changepin
Res",PU,T,,,,,,,,,,,"<changepinRes>
<requestid>2854</requestid>
<code>0</code>
</changepinRes>",,"Изменение
PIN карты в
БД ПЦ SVFE
и отправка
его SMS.",,,,,,
,,,,,,,/uapi-2.0/v1/cards/changepin,,,,,,,,,,,,,,,,,,,,
,,,,,,,HTTP/1.1,,,,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,,,,,,,,,,,
SCNG,,,,,,,,,,,,,,,,,,,,,,,,,,,
Запрос изменения сервиса (3.0.0.10),,,,,,,,,,,,,,,,,,,,,,,,,,,
"PUT
/service/changeservice
(3.0.0.10)","/service/chang
eservice",500,M,"Запрос изменения
сервиса","changese
rviceReq","changeservi
ceRes",PU,T,,,,,,,,,,,"<?xml version=""1.0""
encoding=""UTF-8""
standalone=""yes""?>
<changeserviceRes>
<card>
<panmask>419833######805
0</panmask>
<panid>05010000001016228
65</panid>
<fiid>FNS1</fiid>
</card>
<accountno>26209000049090
</accountno>
<service>
<entitytype>2</entitytype>
<servicetype>7</servicetype>
<serviceid>FNS1ALL</servic
eid>
</service>
<serviceparameters>
<mobphone>380501234567</
mobphone>
<email>ukrcard@ukrcard.co
m.ua</email>
</serviceparameters>
</changeserviceRes>",,"Запрос
изменения
сервиса
Метод
работает
сейчас
ТОЛЬКО с
entitytype=2
(картсчет) и
serviceparame
ters=mobphon
e.",,,,,,
,,,,,,,"/uapi-
2.0/v1",,/service/changeservice,,,,,,,,,,,,,,,,,,
,,,,,,,HTTP/1.1,,,,,,,,,,,,,,,,,,,,
,,,,,,,<changeserviceReq>,,,,,,,,,,,,,,,,,,,,
,,,,,,,<card>,,,,,,,,,,,,,,,,,,,,
,,,,,,,<pan>4198331013428050</pa,,,,,,,,,,,,,,,,,,,,
,,,,,,,n>,,,,,,,,,,,,,,,,,,,,
,,,,,,,<panmask>419833######805,,,,,,,,,,,,,,,,,,,,
,,,,,,,0</panmask>,,,,,,,,,,,,,,,,,,,,
,,,,,,,<mbr>0</mbr>,,,,,,,,,,,,,,,,,,,,
,,,,,,,<panid>050100000010162286,,,,,,,,,,,,,,,,,,,,
,,,,,,,"5</panid>
</card>",,,,,,,,,,,,,,,,,,,,
,,,,,,,<accountno>26209000049090,,,,,,,,,,,,,,,,,,,,
,,,,,,,</accountno>,,,,,,,,,,,,,,,,,,,,
,,,,,,,<actiontype>D</actiontype>,,,,,,,,,,,,,,,,,,,,
,,,,,,,<service>,,,,,,,,,,,,,,,,,,,,
,,,,,,,<entitytype>2</entitytype>,,,,,,,,,,,,,,,,,,,,
,,,,,,,"<servicetype>7</servicetype>
<serviceid>FNS1ALL</servic",,,,,,,,,,,,,,,,,,,,
,,,,,,,eid>,,,,,,,,,,,,,,,,,,,,
,,,,,,,</service,,,,>,,,,,,,,,,,,,,,,
,,,,,,,<serviceparameters>,,,,,,,,,,,,,,,,,,,,
,,,,,,,<mobphone>380501234567</,,,,,,,,,,,,,,,,,,,,
,,,,,,,mobphone>,,,,,,,,,,,,,,,,,,,,
,,,,,,,<email>ukrcard@ukrcard.com,,,,,,,,,,,,,,,,,,,,
,,,,,,,.ua</email>,,,,,,,,,,,,,,,,,,,,
,,,,,,,</serviceparameters>,,,,,,,,,,,,,,,,,,,,
,,,,,,,<!-,-,,,,,,,,,,,,,,,,,,,
,,,,,,,<userdata>Пользовательские,,,,,,,,,,,,,,,,,,,,
,,,,,,,данные</userdata>-->,,,,,,,,,,,,,,,,,,,,
,,,,,,,</changeserviceReq>,,,,,,,,,,,,,,,,,,,,
LUP,,,,,,,,,,,,,,,,,,,,,,,,,,,
LookUp аутентификация по карте (3.0.0.11),,,,,,,,,,,,,,,,,,,,,,,,,,,
"PUT /cards/lookup
(3.0.0.11)",/cards/lookup,134,M,"LookUp
аутентификация по
карте","lookupR
eq",lookupRes,"PUT /uapi-2.0/v1/cards/looku
HTTP/1.1
<lookupReq>
<lookupAuthCardreq>
<pan>4198331013428050</pa
n>
<expDate>2303</expDate>
<cvv2Cvc2>149</cvv2Cvc2>
</lookupAuthCardreq>
</lookupReq>",,,,,,,,,,,,"p <?xml version=""1.0""
encoding=""UTF-8""
standalone=""yes""?>
<lookupRes>
<lookupAuthCardres>
<pan>4198331013428050</p
an>
</lookupAuthCardres>
<otp>989482</otp>
</lookupRes>",,"LookUp
аутентификац
ия по карте",,,,,,
P2P,,,,,,,,,,,,,,,,,,,,,,,,,,,
Перевод средств с карты на карту (3.0.0.11),,,,,,,,,,,,,,,,,,,,,,,,,,,
"PUT
/cards/p2ptransfer
(3.0.0.11)","/cards/p2ptran
sfer",135,M,"Перевод средств
с карты на карту","p2ptransf
erReq","p2Ptransfer
Res","PUT /uapi-
2.0/v1/cards/p2ptransfer
HTTP/1.1
<p2ptransferReq>
<senderident>
<panmask>402902******926
9</panmask>
<mbr>0</mbr>
<panid>050100000010163602
2</panid>
<expdate>2310</expdate>
<accountno>26207000049092
</accountno>
</senderident>
<receiverident>
<panmask>57499
9******3813</panmask>
<mbr>0</mbr>
<panid>050400000010163549
9</panid>",,,,,,,,,,,,"<?xml version=""1.0""
encoding=""UTF-8""
standalone=""yes""?>
<p2PtransferRes>
<tranid>00000000000000000
000000000543898</tranid>
<stan>323006</stan>
<processingcode>49</process
ingcode>
<terminalid>IBNS4SV1</ter
minalid>
<responsecode>00</response
code>
<trandattim>2020-03-
09T14:19:50.537+02:00</tran
dattim>
<approvalcode>919091</appr
ovalcode>
<invoicenum>000015919088
</invoicenum>
<userdata>%UAH;30;;;;;;P2P",,"Перевод
средств с
карты на
карту",,,,,,
,,,,,,,,,,,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,"<accountno>26250266625003
</accountno>
</receiverident>
<transferamt>
<trancurrencyno>980</trancur
rencyno>
<tranamt>2.50</tranamt>
<authcurrencyno>980</authcu
rrencyno>
<authamt>2.50</authamt>
<convratetran2auth>52800000
</convratetran2auth>
<convratetran2authdate>2019-
01-
08</convratetran2authdate>
<tranfee>0.30</tranfee>
<authfee>0.30</authfee>
</transferamt>
<receiverinfo>
<name>ФИО
получателя</name>
</receiverinfo>
<transferpartydata
>
<counterpartyid>
P2PTransfer</counterpartyid>
<fullremark>Пер
евод средств согласно
дог.5/28</fullremark>
</transferpartydat
a>
</p2ptransferReq>",,,"Transfer;%Перевод средств
согласно дог.5/28</userdata>
</p2PtransferRes>",,,,,,,,`;
