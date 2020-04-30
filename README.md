# social-direct-link

Get direct link from youtube video or twitch stream

## Installation

```sh
git clone https://github.com/maxgfr/social-direct-link.git
cd social-direct-link
npm install
node youtube.js
node twitch.js
```

## Twitch result

```JSON
[
  {
    "quality": "Source",
    "resolution": "1920x1080",
    "url": "https://video-weaver.cdg02.hls.ttvnw.net/v1/playlist/CpADWYihUClM0q8tc9TdvfdwnDOAo8tcVkISvo8r_MTojO6tckKXMrvwXn9YpCjLN5brB0V5bYOz_T_QT4a-PzsTIPqAAeuAPh7Rd61B2weor3DSVqC3NSeqxbBF-fbgNR6Sque8Kpjrmg_DWPX1Iu4YQy5xGnbbixaSJYOkhdBSU_YiAxHCVgfivv8eAAoUn5qk86I4S5EjaJZJBzP-JcMkKjykTizhXlmaOzEfDJ5DDvDVsx7VOUjYiDV5P8GNEvOVnOTSdXYuamVf_vTa-MK7yYLcQPZT-yxBelXB3k6VKWfL7rjxdgPWWzQ5DQPsHJTfNcoXO3f-vxaWrfu-W5U4Xgbk78jqH8oodgSvMf2VsjyeIWB950p4HLxs1MmREx03V724aF98TPrsjVRH3zceaUdlF5pMpI7UuyqVxJIaOsCQXonU2aejgpG0u8vB1940z1KQB0alpriMvoeKBOtrjvTwhiua2W-kBDI2wMGDPQ2484-BguqP9rwI-0mH3eW1t-1dyIUGVW_aivdP3dBKVxIQssoIA1LDxJ66LogqEo6AJxoMxwO22H0iYlBlbiJl.m3u8"
  },
  {
    "quality": "720p60",
    "resolution": "1280x720",
    "url": "https://video-weaver.cdg02.hls.ttvnw.net/v1/playlist/Co4DmfZRs41NZvklC0-vGQqtwB3rEKLlNLIKHoKcWONk727sfxSqmIEdJ3AsOpiX9mSWpVuim0_5snuQmCuHmfujzEv2DhxRzQ-uETMeT542y66LnOsRxpihBtoku_nrU4ZRA7qpLpc6imTPn6CzJGMIRHuExRKIfyauXQktYyRBEEuou7pK4WQdmEvvOckrNpZBUzf1AbDMhyV-Q8vlOMvZwPExq626eXGuOt8XbHbipYIWKy6SiY7gk_157gcAfwUkHcACM8bNEtHYMHfgOErEdKQvcjBKAIo6b4viLGqL1QeyTFdaZ33emZbaX9tb7XHECHQjMnteeDuOEaAjc5KZBZF9zBIB9yMXy3cDq_vW5AVcnTnCRcG5QbkqioawLgqDu2an4Zv0I_76WH7pXv_i57-o-D2zDKAN5H6hBTrL5j__W1O8fCQp5BOxYVpEsEohTlCUwyI1PfmSLBubeFOeCAuon0XMEql9Tmx8nPCsXpA2PvYTht_7tbp4m9u790r0H9m4jfRxcXx3tsZh2eISEC2g3aGqfN4gVU4Wheoz-LsaDJdiiK7C8L2KM3oNXA.m3u8"
  },
  {
    "quality": "720p30",
    "resolution": "1280x720",
    "url": "https://video-weaver.cdg02.hls.ttvnw.net/v1/playlist/Co4DkmtRM7x33YlxsgF1FuN-OAzOPSiBKbRCgbIyzNmQQ7b5CZ2qQ8Cmx0VrSQmgoW9vFVkC2uNGvxfNN8HMJYHUf9aqkFJ_dUZ104T3daNEkEy5Umawbt2G9CuQZBlyB1N5VOkw4M2TisdZ1EdQNg0QOvhb7EGXNKc0XiTcKQA1vCeYUCOsRjVDzavoCDSSNjmK37SuluQezFWkiMjoWmrysm6zzg0oakxz9jY58msPYSJfnltITVFq7vBDT7yfy3tAtWXRDqKa7AbrFjUSWQpNwxAeQU0h8jXSudga4DZb8zldwvT-kj69xmkN2-UKy1Kj1yoAzfAt8rvX8TGDG2hFylg6a6QX0BTViAVOel3bcJU5JgFugLkx__T0X6jiGLtP4wFCGS9w9PsMzBUvnMSyKUXT1RXg8Ctvao6UVsXMekR9ZYZ33lwy183pmxhk9AvpYHBJLJKy8c-MDudJ_7LZrGjGqKqAD4KZALwWtpGts7luzQwf6hC8SA3VPNF8fB8G7AMFLNJRjcx6L190moASEB_v13yoURATfH5qXQF_eCIaDEOMy7PEv9HJLCYTMQ.m3u8"
  },
  {
    "quality": "480p30",
    "resolution": "852x480",
    "url": "https://video-weaver.cdg02.hls.ttvnw.net/v1/playlist/Co4DzsIPtIyC5Zv9YfAp55NoobO24i1ojL6_1ThDw6R8HC6tNMAa3-_VfGtjUO3VP8nr7o41acAAzQCeQ_alEf573CAQabdHteopXC1aliDcge121FGGFvcN5xeb4OavyftwXB0d6cgLZXMClMYtCcJO3tlDjJKtmwhFwOFPni2EL3VvbcXF4iU1UlJfuBymMGQd8lXVDo75NWFdQ3620Pqe4szCidkwSq4uGCTbgYQIMqQXJoPKsBYCxdCsVyiRix9rV31IbBBVWk75jkEYwV2DJ0H9V3snkuYM4DX5fWMeXquYv-_E5GRipRKhFtUGIMLRGVwo9qFY73zW__VxRo0VQ-p3VbEffGBc1pXdiez4wa86_bW0mjosktOrTKWaowGEAjMox-TT2Y7uF1IxLL4Wq-8U0jE4Yp70myJiifvVxH8IDYbAwn6pa8Yo9RtKsQ-ogsrxDlnJO4Cgi92yVyLLjFOT-Y4_jsm_UcMea7AT3KC5Z_BnF5iRFmgNECjwGVRTO6t0UmEkD-4QhJyDzagSEEgqc4g0k-91eDCzkXCZ0LkaDFS1E6CevtZCCFTxrQ.m3u8"
  },
  {
    "quality": "360p30",
    "resolution": "640x360",
    "url": "https://video-weaver.cdg02.hls.ttvnw.net/v1/playlist/Co4D_bWYj47neyYcMgZeRgP5KWt3PmAIFSIZMv62UTHkddrjWwG_J7iMwIAEqp1Z4lr8g7iTIEx7HUUik8HDYYtCWJwtrczsNWnP98knniEzkgad-Ci4-QSP2gbuHvLDPhLEFd3H_qf7QZO6_icA8V0ClbE4XsGMVBNMfmjltJnIBGk3Lzml7Y3F-55x8GgfswugIiQRByNs4JDA6F21N88kXp1cZ4eE2Coeqo4A4OYBV1fPSqRMPgQbYYrkQZQXEsy4OkFs2TGtHWcgTEw4vps-XxXgE4olUUNM-fnVF4zPQ07ciLrjRuzlufNy38QcJ_-X5G3c9CB4aKG-rXtXAWmIBMaDRIcCQXEcmARhMlOws7FD8XP2dceZCvrDcH2Jjd6GK59W62tEghWPv9er1xJhjAmo3CSSx5F7Y_qj_6_-9Oyh8ypf00XqeAaxtjFty9VCtrPamsUxIcpI5VNwxW0g-yw0qWUL9FuyeKR3SlzvgHz3TU2BpIjOsQac8mVqcvhrUjXFhgJgYIiz5jQ9lbgSECmx0_OFhsoqpzETKKG_MDAaDKvfFJ3M4HBC49Y-rg.m3u8"
  },
  {
    "quality": "160p30",
    "resolution": "284x160",
    "url": "https://video-weaver.cdg02.hls.ttvnw.net/v1/playlist/Co4DYimj9aBUtLy5zLjy5di-O1xfrTAbz6c3NxXmY-hfHOwYiHGA8LKV5YRszRV7_-CSGLGjd0XARE2RYB-8cg9HEiM1BpbA9winJwvEjKkOx3gNogtfmHrb35uUQMYGwy0fkP_IAtmIExrGGErbnVROfIh3NwKvoU2d8WgdCS-7FIEK7E_mEAduokOcER5JBiwig2li9b6LGf5VJfJeJO4Rs7S3fOagqWbFCq2mMGRlvbALS1Ygf5jEAB3LLk-luWF9EUlCWUURuSk6XtO1wcA0798znyoYkyHAwRHXPoa5uzqvpugprlihUEr4rMV1BAcqm18p7UX0jwuPtUSK1YY4h8CkGgKOYypaqpu2zAxJBtDfVJs2Q1oDF-kSpMOeaR97uw84RW5-HTNzXXLP-GsjSunl24BO0aRtAoeOidjNKIYnhkEAVuE6pC1l1rTKYtd07MRCh7sNQLwehHmc-L8KREGtx3zZTLGdGTHiixBdtei7ngU7RrBp0UftWA5gCjZ46mbW0ucFm_LuWkzCjX8SEGNps1f275Bqt7XMkY1cFdoaDMzk2pg8yR8wt4Zt2g.m3u8"
  },
  {
    "quality": "Audio Only",
    "resolution": null,
    "url": "https://video-weaver.cdg02.hls.ttvnw.net/v1/playlist/CpYD_UUfXkYm4JsGCOemYmyqxvWEMowkL4gvUGvwPMjxRSeZvF94mHl9RRr7udci4jlBDkMzoIdRp7311SgHqyDAWoZAPM7Ltb6cGa67cox9KHIdM9qK9ixNvavtUe9Icvsb86rqpAgth44FHY1u2V6MT7EjU_H9EVour02tJzwlc-ALmcbI4MiP3ok4edbri1d3NwKBpK-Dgj8NfVX_ArtClEYQRhhRaMkG1u0H8fGHTvfGIWoXEul_UFLzgt-RRm-rIUpxF29td1rWeOycEFbSnTvqx43I11sqW_0Pq6st3O9GtYK-l1H-H5mxdSg1JVFtz4EFIiZNF8M4FbwhSsFw7ZXuyFlwwcOMXfbvPtm0LrA7c5DGgad4gOZ-Kn6qPuAdBtsPsUbd-nQQLagf4QKt6kRHKsozmHM1I_iIcoPgrpLe7hi_R7hOiIa1epfArEgUNdP0ndEDrw9jEFc0iYyFyTod1ybSn7xGXx07PKfCM6RO27csrPpAY5wssEVewQA3szHmZjo3gN4kjS9mZ8pRSFtckMh7-xIQZ1plPWMRFlVN3ifdw3WVdRoMyy4NJcJhJd6sr1Bq.m3u8"
  }
]
```

## Youtube result

```JSON
{
  "upload_date": "20200127",
  "protocol": "https",
  "extractor": "youtube",
  "series": null,
  "format": "22 - 1280x720 (720p)",
  "format_note": "720p",
  "chapters": null,
  "height": 720,
  "acodec": "mp4a.40.2",
  "like_count": 49195,
  "duration": "4:10",
  "fulltitle": "Itachi VS Kisame, (OVA Completo) Legendado PT-BR Naruto Shippuden G! (1080p)",
  "player_url": null,
  "playlist_index": null,
  "album": null,
  "view_count": 3849113,
  "playlist": null,
  "title": "Itachi VS Kisame, (OVA Completo) Legendado PT-BR Naruto Shippuden G! (1080p)",
  "_filename": "Itachi VS Kisame, (OVA Completo) Legendado PT-BR Naruto Shippuden G! (1080p)-rd3eWHy0rRs.mp4",
  "creator": null,
  "ext": "mp4",
  "id": "rd3eWHy0rRs",
  "dislike_count": 1470,
  "average_rating": 4.8839436,
  "abr": 192,
  "uploader_url": "http://www.youtube.com/user/GamerMTDtwo",
  "categories": [
    "Gaming"
  ],
  "fps": null,
  "season_number": null,
  "annotations": null,
  "webpage_url_basename": "watch",
  "filesize": null,
  "display_id": "rd3eWHy0rRs",
  "asr": 44100,
  "automatic_captions": {},
  "description": "Itachi Uchiha VS Kisame Hoshigaki Especial Naruto Shippuden: Ultimate Ninja Storm Generations,..\n\nAkatsuki:\nAkatsuki ((暁; Literalmente significa \"Amanhecer\" ou \"Alvorecer\") foi inicialmente uma organização criada por Yahiko e seus dois companheiros Konan e Nagato, em um esforço para lutar contra a tirania e a opressão que sua aldeia natal, Amegakure, estava enfrentando durante a Terceira Guerra Mundial Shinobi, além da ambição de conquistar a paz mundial.\n\nApós a morte de Yahiko e sob a influência de Obito Uchiha, a Akatsuki tornou-se uma organização criminosa formada por Nukenin Rank-S e é o grupo mais procurado em todo o mundo shinobi. Seu principal objetivo é recolher todos os Bijū para o seu plano de dominação mundial. Como tal, a Akatsuki, apesar de ter inicialmente um papel menor durante a Parte I, tornou-se a principal força antagônica na Parte II.",
  "tags": [],
  "track": null,
  "requested_subtitles": null,
  "start_time": null,
  "tbr": 437.271,
  "uploader": "GAMES&Anime / Naruto Seasons™ Brasil",
  "format_id": "22",
  "episode_number": null,
  "uploader_id": "GamerMTDtwo",
  "subtitles": {},
  "release_year": null,
  "http_headers": {
    "Accept-Charset": "ISO-8859-1,utf-8;q=0.7,*;q=0.7",
    "Accept-Language": "en-us,en;q=0.5",
    "Accept-Encoding": "gzip, deflate",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.98 Safari/537.36"
  },
  "thumbnails": [
    {
      "url": "https://i.ytimg.com/vi/rd3eWHy0rRs/maxresdefault.jpg",
      "id": "0"
    }
  ],
  "license": null,
  "artist": null,
  "url": "https://r3---sn-hgn7yn76.googlevideo.com/videoplayback?expire=1588285465&ei=ufuqXrS_L_evxN8P4_aTyAI&ip=2a01%3Acb14%3A82d5%3A3100%3A3d11%3A46bf%3A19ff%3Abfee&id=o-AICBbNTYG9Lw9Zv5TtoSk7VSVDwUnulPHwCTPfwG5-6h&itag=22&source=youtube&requiressl=yes&mh=8U&mm=31%2C29&mn=sn-hgn7yn76%2Csn-hgn7rne7&ms=au%2Crdu&mv=m&mvi=2&pl=30&initcwndbps=658750&vprv=1&mime=video%2Fmp4&ratebypass=yes&dur=250.311&lmt=1581344787024885&mt=1588263755&fvip=3&c=WEB&txp=5535432&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cratebypass%2Cdur%2Clmt&sig=AJpPlLswRgIhAN11Ts3Gz2H61iH-5IS3vZwdTBN-GEoMyLLbl0Yagmy7AiEA6I5r8BxafzH-Uoo4oknswgiFAxiupHPRFq6EjFzYuEQ%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=ALrAebAwRAIgWnmZx5A9Me3uxo9Sco7eBQBRz97T8sqP_-BoN7bPBbECIHNxteEJx5p75dDRlqMCD_wPU7ZYHQz-q3e6rtTyag1g",
  "extractor_key": "Youtube",
  "release_date": null,
  "alt_title": null,
  "thumbnail": "https://i.ytimg.com/vi/rd3eWHy0rRs/maxresdefault.jpg",
  "channel_id": "UCSjK-DjIg2xl7l7WC-Tr1sg",
  "is_live": null,
  "width": 1280,
  "end_time": null,
  "webpage_url": "https://www.youtube.com/watch?v=rd3eWHy0rRs",
  "formats": [
    {
      "asr": 48000,
      "tbr": 62.053,
      "protocol": "https",
      "format": "249 - audio only (tiny)",
      "url": "https://r3---sn-hgn7yn76.googlevideo.com/videoplayback?expire=1588285465&ei=ufuqXrS_L_evxN8P4_aTyAI&ip=2a01%3Acb14%3A82d5%3A3100%3A3d11%3A46bf%3A19ff%3Abfee&id=o-AICBbNTYG9Lw9Zv5TtoSk7VSVDwUnulPHwCTPfwG5-6h&itag=249&source=youtube&requiressl=yes&mh=8U&mm=31%2C29&mn=sn-hgn7yn76%2Csn-hgn7rne7&ms=au%2Crdu&mv=m&mvi=2&pl=30&initcwndbps=658750&vprv=1&mime=audio%2Fwebm&gir=yes&clen=1525576&dur=250.261&lmt=1581343313251954&mt=1588263755&fvip=3&keepalive=yes&c=WEB&txp=5531432&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJpPlLswRQIgAqZRKgrXeOAOODCRoYxVVI8HSweVCSvf5ugUfkCcYVYCIQDgoEaDNrrKGLtFPC8Sm4dAwi1ObF2ORJRFPJcdQtAngA%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=ALrAebAwRAIgWnmZx5A9Me3uxo9Sco7eBQBRz97T8sqP_-BoN7bPBbECIHNxteEJx5p75dDRlqMCD_wPU7ZYHQz-q3e6rtTyag1g&ratebypass=yes",
      "vcodec": "none",
      "format_note": "tiny",
      "abr": 50,
      "player_url": null,
      "downloader_options": {
        "http_chunk_size": 10485760
      },
      "width": null,
      "ext": "webm",
      "filesize": 1525576,
      "fps": null,
      "format_id": "249",
      "height": null,
      "http_headers": {
        "Accept-Charset": "ISO-8859-1,utf-8;q=0.7,*;q=0.7",
        "Accept-Language": "en-us,en;q=0.5",
        "Accept-Encoding": "gzip, deflate",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.98 Safari/537.36"
      },
      "acodec": "opus"
    },
    {
      "asr": 48000,
      "tbr": 80.224,
      "protocol": "https",
      "format": "250 - audio only (tiny)",
      "url": "https://r3---sn-hgn7yn76.googlevideo.com/videoplayback?expire=1588285465&ei=ufuqXrS_L_evxN8P4_aTyAI&ip=2a01%3Acb14%3A82d5%3A3100%3A3d11%3A46bf%3A19ff%3Abfee&id=o-AICBbNTYG9Lw9Zv5TtoSk7VSVDwUnulPHwCTPfwG5-6h&itag=250&source=youtube&requiressl=yes&mh=8U&mm=31%2C29&mn=sn-hgn7yn76%2Csn-hgn7rne7&ms=au%2Crdu&mv=m&mvi=2&pl=30&initcwndbps=658750&vprv=1&mime=audio%2Fwebm&gir=yes&clen=1943047&dur=250.261&lmt=1581343314415540&mt=1588263755&fvip=3&keepalive=yes&c=WEB&txp=5531432&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJpPlLswRgIhAJqZmNJUpf093fmWaaFPlPairsL4lR0XHavg4Oz3yBeiAiEAvK2hQFHhXZQX3j0CWwwZ9I4E5JS5cCWve-v-WTVp01w%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=ALrAebAwRAIgWnmZx5A9Me3uxo9Sco7eBQBRz97T8sqP_-BoN7bPBbECIHNxteEJx5p75dDRlqMCD_wPU7ZYHQz-q3e6rtTyag1g&ratebypass=yes",
      "vcodec": "none",
      "format_note": "tiny",
      "abr": 70,
      "player_url": null,
      "downloader_options": {
        "http_chunk_size": 10485760
      },
      "width": null,
      "ext": "webm",
      "filesize": 1943047,
      "fps": null,
      "format_id": "250",
      "height": null,
      "http_headers": {
        "Accept-Charset": "ISO-8859-1,utf-8;q=0.7,*;q=0.7",
        "Accept-Language": "en-us,en;q=0.5",
        "Accept-Encoding": "gzip, deflate",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.98 Safari/537.36"
      },
      "acodec": "opus"
    },
    {
      "asr": 44100,
      "tbr": 130.6,
      "container": "m4a_dash",
      "format": "140 - audio only (tiny)",
      "url": "https://r3---sn-hgn7yn76.googlevideo.com/videoplayback?expire=1588285465&ei=ufuqXrS_L_evxN8P4_aTyAI&ip=2a01%3Acb14%3A82d5%3A3100%3A3d11%3A46bf%3A19ff%3Abfee&id=o-AICBbNTYG9Lw9Zv5TtoSk7VSVDwUnulPHwCTPfwG5-6h&itag=140&source=youtube&requiressl=yes&mh=8U&mm=31%2C29&mn=sn-hgn7yn76%2Csn-hgn7rne7&ms=au%2Crdu&mv=m&mvi=2&pl=30&initcwndbps=658750&vprv=1&mime=audio%2Fmp4&gir=yes&clen=4051988&dur=250.311&lmt=1581343318417291&mt=1588263755&fvip=3&keepalive=yes&c=WEB&txp=5531432&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJpPlLswRgIhALEiuF3zKu_XgKUu9pDb8pIq1UNWpKE9YiNNq5mhQwt6AiEA26F18wokqlU-M94TFyuEmGIAuG1AiEiZJMk4ph2_8rw%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=ALrAebAwRAIgWnmZx5A9Me3uxo9Sco7eBQBRz97T8sqP_-BoN7bPBbECIHNxteEJx5p75dDRlqMCD_wPU7ZYHQz-q3e6rtTyag1g&ratebypass=yes",
      "vcodec": "none",
      "format_note": "tiny",
      "abr": 128,
      "player_url": null,
      "downloader_options": {
        "http_chunk_size": 10485760
      },
      "width": null,
      "ext": "m4a",
      "filesize": 4051988,
      "fps": null,
      "protocol": "https",
      "format_id": "140",
      "height": null,
      "http_headers": {
        "Accept-Charset": "ISO-8859-1,utf-8;q=0.7,*;q=0.7",
        "Accept-Language": "en-us,en;q=0.5",
        "Accept-Encoding": "gzip, deflate",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.98 Safari/537.36"
      },
      "acodec": "mp4a.40.2"
    },
    {
      "asr": 48000,
      "tbr": 151.63,
      "protocol": "https",
      "format": "251 - audio only (tiny)",
      "url": "https://r3---sn-hgn7yn76.googlevideo.com/videoplayback?expire=1588285465&ei=ufuqXrS_L_evxN8P4_aTyAI&ip=2a01%3Acb14%3A82d5%3A3100%3A3d11%3A46bf%3A19ff%3Abfee&id=o-AICBbNTYG9Lw9Zv5TtoSk7VSVDwUnulPHwCTPfwG5-6h&itag=251&source=youtube&requiressl=yes&mh=8U&mm=31%2C29&mn=sn-hgn7yn76%2Csn-hgn7rne7&ms=au%2Crdu&mv=m&mvi=2&pl=30&initcwndbps=658750&vprv=1&mime=audio%2Fwebm&gir=yes&clen=3873729&dur=250.261&lmt=1581343313527186&mt=1588263755&fvip=3&keepalive=yes&c=WEB&txp=5531432&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJpPlLswRQIgTrUeiLII-zwWlWU2deRY5dz0YcRVAv3dgS2VCWSEDAgCIQDfQoK7tAlQ4HOiTiADOT-KraLmf6MM25QE5kN9y2qOBw%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=ALrAebAwRAIgWnmZx5A9Me3uxo9Sco7eBQBRz97T8sqP_-BoN7bPBbECIHNxteEJx5p75dDRlqMCD_wPU7ZYHQz-q3e6rtTyag1g&ratebypass=yes",
      "vcodec": "none",
      "format_note": "tiny",
      "abr": 160,
      "player_url": null,
      "downloader_options": {
        "http_chunk_size": 10485760
      },
      "width": null,
      "ext": "webm",
      "filesize": 3873729,
      "fps": null,
      "format_id": "251",
      "height": null,
      "http_headers": {
        "Accept-Charset": "ISO-8859-1,utf-8;q=0.7,*;q=0.7",
        "Accept-Language": "en-us,en;q=0.5",
        "Accept-Encoding": "gzip, deflate",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.98 Safari/537.36"
      },
      "acodec": "opus"
    },
    {
      "asr": null,
      "tbr": 78.766,
      "protocol": "https",
      "format": "394 - 256x144 (144p)",
      "url": "https://r3---sn-hgn7yn76.googlevideo.com/videoplayback?expire=1588285465&ei=ufuqXrS_L_evxN8P4_aTyAI&ip=2a01%3Acb14%3A82d5%3A3100%3A3d11%3A46bf%3A19ff%3Abfee&id=o-AICBbNTYG9Lw9Zv5TtoSk7VSVDwUnulPHwCTPfwG5-6h&itag=394&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C278%2C394%2C395%2C396%2C397%2C398%2C399&source=youtube&requiressl=yes&mh=8U&mm=31%2C29&mn=sn-hgn7yn76%2Csn-hgn7rne7&ms=au%2Crdu&mv=m&mvi=2&pl=30&initcwndbps=658750&vprv=1&mime=video%2Fmp4&gir=yes&clen=1858144&dur=250.249&lmt=1581348340640514&mt=1588263755&fvip=3&keepalive=yes&c=WEB&txp=5531432&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJpPlLswRQIgCuk-30nvjITt8dr7JsbsZf1ElR5lv9WpaW3mk_fxclkCIQD4bMaypZfWGBlg_SerHsnKIFSSC8Fn1BgQKqwXak8Seg%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=ALrAebAwRAIgWnmZx5A9Me3uxo9Sco7eBQBRz97T8sqP_-BoN7bPBbECIHNxteEJx5p75dDRlqMCD_wPU7ZYHQz-q3e6rtTyag1g&ratebypass=yes",
      "vcodec": "av01.0.00M.08",
      "format_note": "144p",
      "player_url": null,
      "downloader_options": {
        "http_chunk_size": 10485760
      },
      "width": 256,
      "ext": "mp4",
      "filesize": 1858144,
      "fps": 30,
      "format_id": "394",
      "height": 144,
      "http_headers": {
        "Accept-Charset": "ISO-8859-1,utf-8;q=0.7,*;q=0.7",
        "Accept-Language": "en-us,en;q=0.5",
        "Accept-Encoding": "gzip, deflate",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.98 Safari/537.36"
      },
      "acodec": "none"
    },
    {
      "asr": null,
      "tbr": 97.638,
      "container": "webm",
      "format": "278 - 256x144 (144p)",
      "url": "https://r3---sn-hgn7yn76.googlevideo.com/videoplayback?expire=1588285465&ei=ufuqXrS_L_evxN8P4_aTyAI&ip=2a01%3Acb14%3A82d5%3A3100%3A3d11%3A46bf%3A19ff%3Abfee&id=o-AICBbNTYG9Lw9Zv5TtoSk7VSVDwUnulPHwCTPfwG5-6h&itag=278&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C278%2C394%2C395%2C396%2C397%2C398%2C399&source=youtube&requiressl=yes&mh=8U&mm=31%2C29&mn=sn-hgn7yn76%2Csn-hgn7rne7&ms=au%2Crdu&mv=m&mvi=2&pl=30&initcwndbps=658750&vprv=1&mime=video%2Fwebm&gir=yes&clen=1983525&dur=250.250&lmt=1581345642313688&mt=1588263755&fvip=3&keepalive=yes&c=WEB&txp=5535432&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJpPlLswRAIgDqlavLULOoJTp4TnAeSbAIay0S00yl24F0nPM1Xl9oICIEnZs11UTBD6aPL6ua816Noxe5fKHxN3kQ8CysGVFLHY&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=ALrAebAwRAIgWnmZx5A9Me3uxo9Sco7eBQBRz97T8sqP_-BoN7bPBbECIHNxteEJx5p75dDRlqMCD_wPU7ZYHQz-q3e6rtTyag1g&ratebypass=yes",
      "vcodec": "vp9",
      "format_note": "144p",
      "player_url": null,
      "downloader_options": {
        "http_chunk_size": 10485760
      },
      "width": 256,
      "ext": "webm",
      "filesize": 1983525,
      "fps": 30,
      "protocol": "https",
      "format_id": "278",
      "height": 144,
      "http_headers": {
        "Accept-Charset": "ISO-8859-1,utf-8;q=0.7,*;q=0.7",
        "Accept-Language": "en-us,en;q=0.5",
        "Accept-Encoding": "gzip, deflate",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.98 Safari/537.36"
      },
      "acodec": "none"
    },
    {
      "asr": null,
      "tbr": 109.621,
      "protocol": "https",
      "format": "160 - 256x144 (144p)",
      "url": "https://r3---sn-hgn7yn76.googlevideo.com/videoplayback?expire=1588285465&ei=ufuqXrS_L_evxN8P4_aTyAI&ip=2a01%3Acb14%3A82d5%3A3100%3A3d11%3A46bf%3A19ff%3Abfee&id=o-AICBbNTYG9Lw9Zv5TtoSk7VSVDwUnulPHwCTPfwG5-6h&itag=160&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C278%2C394%2C395%2C396%2C397%2C398%2C399&source=youtube&requiressl=yes&mh=8U&mm=31%2C29&mn=sn-hgn7yn76%2Csn-hgn7rne7&ms=au%2Crdu&mv=m&mvi=2&pl=30&initcwndbps=658750&vprv=1&mime=video%2Fmp4&gir=yes&clen=1475987&dur=250.249&lmt=1581344776337629&mt=1588263755&fvip=3&keepalive=yes&c=WEB&txp=5535432&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJpPlLswRQIgaM99G5gTgq05m7-Q8x6rfZkE7z1wNNpiT2XHiJ7d7DQCIQDPMAucBrw49To5F8qkJkPClnmW6d_WthCpRVOSB7SY9Q%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=ALrAebAwRAIgWnmZx5A9Me3uxo9Sco7eBQBRz97T8sqP_-BoN7bPBbECIHNxteEJx5p75dDRlqMCD_wPU7ZYHQz-q3e6rtTyag1g&ratebypass=yes",
      "vcodec": "avc1.4d400c",
      "format_note": "144p",
      "height": 144,
      "downloader_options": {
        "http_chunk_size": 10485760
      },
      "width": 256,
      "ext": "mp4",
      "filesize": 1475987,
      "fps": 30,
      "format_id": "160",
      "player_url": null,
      "http_headers": {
        "Accept-Charset": "ISO-8859-1,utf-8;q=0.7,*;q=0.7",
        "Accept-Language": "en-us,en;q=0.5",
        "Accept-Encoding": "gzip, deflate",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.98 Safari/537.36"
      },
      "acodec": "none"
    },
    {
      "asr": null,
      "tbr": 174.907,
      "protocol": "https",
      "format": "395 - 426x240 (240p)",
      "url": "https://r3---sn-hgn7yn76.googlevideo.com/videoplayback?expire=1588285465&ei=ufuqXrS_L_evxN8P4_aTyAI&ip=2a01%3Acb14%3A82d5%3A3100%3A3d11%3A46bf%3A19ff%3Abfee&id=o-AICBbNTYG9Lw9Zv5TtoSk7VSVDwUnulPHwCTPfwG5-6h&itag=395&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C278%2C394%2C395%2C396%2C397%2C398%2C399&source=youtube&requiressl=yes&mh=8U&mm=31%2C29&mn=sn-hgn7yn76%2Csn-hgn7rne7&ms=au%2Crdu&mv=m&mvi=2&pl=30&initcwndbps=658750&vprv=1&mime=video%2Fmp4&gir=yes&clen=2857940&dur=250.249&lmt=1581348529927428&mt=1588263755&fvip=3&keepalive=yes&c=WEB&txp=5531432&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJpPlLswRAIgZFwfDH-w6JQy9G6VY2FiCSUTYlKrIePHQY8hiw8CtHECIE_SIme7AcdGtKP6Y7n1VbG6olGmSfHUzIPZH5K6PeTC&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=ALrAebAwRAIgWnmZx5A9Me3uxo9Sco7eBQBRz97T8sqP_-BoN7bPBbECIHNxteEJx5p75dDRlqMCD_wPU7ZYHQz-q3e6rtTyag1g&ratebypass=yes",
      "vcodec": "av01.0.00M.08",
      "format_note": "240p",
      "player_url": null,
      "downloader_options": {
        "http_chunk_size": 10485760
      },
      "width": 426,
      "ext": "mp4",
      "filesize": 2857940,
      "fps": 30,
      "format_id": "395",
      "height": 240,
      "http_headers": {
        "Accept-Charset": "ISO-8859-1,utf-8;q=0.7,*;q=0.7",
        "Accept-Language": "en-us,en;q=0.5",
        "Accept-Encoding": "gzip, deflate",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.98 Safari/537.36"
      },
      "acodec": "none"
    },
    {
      "asr": null,
      "tbr": 220.982,
      "protocol": "https",
      "format": "242 - 426x240 (240p)",
      "url": "https://r3---sn-hgn7yn76.googlevideo.com/videoplayback?expire=1588285465&ei=ufuqXrS_L_evxN8P4_aTyAI&ip=2a01%3Acb14%3A82d5%3A3100%3A3d11%3A46bf%3A19ff%3Abfee&id=o-AICBbNTYG9Lw9Zv5TtoSk7VSVDwUnulPHwCTPfwG5-6h&itag=242&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C278%2C394%2C395%2C396%2C397%2C398%2C399&source=youtube&requiressl=yes&mh=8U&mm=31%2C29&mn=sn-hgn7yn76%2Csn-hgn7rne7&ms=au%2Crdu&mv=m&mvi=2&pl=30&initcwndbps=658750&vprv=1&mime=video%2Fwebm&gir=yes&clen=3053046&dur=250.250&lmt=1581345642284011&mt=1588263755&fvip=3&keepalive=yes&c=WEB&txp=5535432&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJpPlLswRQIhANnyu-wo9qc91a2hVAkTTsBdZacJKupEg7iUTfeHaUTiAiAPuo0v2YUpdofC3FnrHerIYrKnlVWssOlIIexlSCuk0Q%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=ALrAebAwRAIgWnmZx5A9Me3uxo9Sco7eBQBRz97T8sqP_-BoN7bPBbECIHNxteEJx5p75dDRlqMCD_wPU7ZYHQz-q3e6rtTyag1g&ratebypass=yes",
      "vcodec": "vp9",
      "format_note": "240p",
      "height": 240,
      "downloader_options": {
        "http_chunk_size": 10485760
      },
      "width": 426,
      "ext": "webm",
      "filesize": 3053046,
      "fps": 30,
      "format_id": "242",
      "player_url": null,
      "http_headers": {
        "Accept-Charset": "ISO-8859-1,utf-8;q=0.7,*;q=0.7",
        "Accept-Language": "en-us,en;q=0.5",
        "Accept-Encoding": "gzip, deflate",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.98 Safari/537.36"
      },
      "acodec": "none"
    },
    {
      "asr": null,
      "tbr": 256.797,
      "protocol": "https",
      "format": "133 - 426x240 (240p)",
      "url": "https://r3---sn-hgn7yn76.googlevideo.com/videoplayback?expire=1588285465&ei=ufuqXrS_L_evxN8P4_aTyAI&ip=2a01%3Acb14%3A82d5%3A3100%3A3d11%3A46bf%3A19ff%3Abfee&id=o-AICBbNTYG9Lw9Zv5TtoSk7VSVDwUnulPHwCTPfwG5-6h&itag=133&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C278%2C394%2C395%2C396%2C397%2C398%2C399&source=youtube&requiressl=yes&mh=8U&mm=31%2C29&mn=sn-hgn7yn76%2Csn-hgn7rne7&ms=au%2Crdu&mv=m&mvi=2&pl=30&initcwndbps=658750&vprv=1&mime=video%2Fmp4&gir=yes&clen=2658091&dur=250.249&lmt=1581344776346968&mt=1588263755&fvip=3&keepalive=yes&c=WEB&txp=5535432&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJpPlLswRQIhAPPpzRLWC_L6qQzgUCEjDdyuPJhXESZ5VBJ7qfK2PTqwAiBhUlxvWPCUPqI7G7p0Ukd9UCd1NO2ZPyW8B3MH0ruIvg%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=ALrAebAwRAIgWnmZx5A9Me3uxo9Sco7eBQBRz97T8sqP_-BoN7bPBbECIHNxteEJx5p75dDRlqMCD_wPU7ZYHQz-q3e6rtTyag1g&ratebypass=yes",
      "vcodec": "avc1.4d4015",
      "format_note": "240p",
      "height": 240,
      "downloader_options": {
        "http_chunk_size": 10485760
      },
      "width": 426,
      "ext": "mp4",
      "filesize": 2658091,
      "fps": 30,
      "format_id": "133",
      "player_url": null,
      "http_headers": {
        "Accept-Charset": "ISO-8859-1,utf-8;q=0.7,*;q=0.7",
        "Accept-Language": "en-us,en;q=0.5",
        "Accept-Encoding": "gzip, deflate",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.98 Safari/537.36"
      },
      "acodec": "none"
    },
    {
      "asr": null,
      "tbr": 310.574,
      "protocol": "https",
      "format": "396 - 640x360 (360p)",
      "url": "https://r3---sn-hgn7yn76.googlevideo.com/videoplayback?expire=1588285465&ei=ufuqXrS_L_evxN8P4_aTyAI&ip=2a01%3Acb14%3A82d5%3A3100%3A3d11%3A46bf%3A19ff%3Abfee&id=o-AICBbNTYG9Lw9Zv5TtoSk7VSVDwUnulPHwCTPfwG5-6h&itag=396&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C278%2C394%2C395%2C396%2C397%2C398%2C399&source=youtube&requiressl=yes&mh=8U&mm=31%2C29&mn=sn-hgn7yn76%2Csn-hgn7rne7&ms=au%2Crdu&mv=m&mvi=2&pl=30&initcwndbps=658750&vprv=1&mime=video%2Fmp4&gir=yes&clen=4790445&dur=250.249&lmt=1581348612397145&mt=1588263755&fvip=3&keepalive=yes&c=WEB&txp=5531432&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJpPlLswRQIgaQwycNy2Ia9FuYVjfJ4KT7M1Xy9Bb96jCpwh_xsaI5QCIQC0qvN6BlwmggQGbPQ4IieEsE8fy1zZ8F5MtzPu47GOWA%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=ALrAebAwRAIgWnmZx5A9Me3uxo9Sco7eBQBRz97T8sqP_-BoN7bPBbECIHNxteEJx5p75dDRlqMCD_wPU7ZYHQz-q3e6rtTyag1g&ratebypass=yes",
      "vcodec": "av01.0.01M.08",
      "format_note": "360p",
      "player_url": null,
      "downloader_options": {
        "http_chunk_size": 10485760
      },
      "width": 640,
      "ext": "mp4",
      "filesize": 4790445,
      "fps": 30,
      "format_id": "396",
      "height": 360,
      "http_headers": {
        "Accept-Charset": "ISO-8859-1,utf-8;q=0.7,*;q=0.7",
        "Accept-Language": "en-us,en;q=0.5",
        "Accept-Encoding": "gzip, deflate",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.98 Safari/537.36"
      },
      "acodec": "none"
    },
    {
      "asr": null,
      "tbr": 384.043,
      "protocol": "https",
      "format": "243 - 640x360 (360p)",
      "url": "https://r3---sn-hgn7yn76.googlevideo.com/videoplayback?expire=1588285465&ei=ufuqXrS_L_evxN8P4_aTyAI&ip=2a01%3Acb14%3A82d5%3A3100%3A3d11%3A46bf%3A19ff%3Abfee&id=o-AICBbNTYG9Lw9Zv5TtoSk7VSVDwUnulPHwCTPfwG5-6h&itag=243&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C278%2C394%2C395%2C396%2C397%2C398%2C399&source=youtube&requiressl=yes&mh=8U&mm=31%2C29&mn=sn-hgn7yn76%2Csn-hgn7rne7&ms=au%2Crdu&mv=m&mvi=2&pl=30&initcwndbps=658750&vprv=1&mime=video%2Fwebm&gir=yes&clen=5116254&dur=250.250&lmt=1581345642300367&mt=1588263755&fvip=3&keepalive=yes&c=WEB&txp=5535432&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJpPlLswRgIhAPAQXwphIkAtP33u_3X9CLdGgKUNkf9Ctr_6Ds1GVEpBAiEAo0H4y2qqTkDaQR5lYMWFmQLZLOWAWqq_02Wh5XEGwdQ%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=ALrAebAwRAIgWnmZx5A9Me3uxo9Sco7eBQBRz97T8sqP_-BoN7bPBbECIHNxteEJx5p75dDRlqMCD_wPU7ZYHQz-q3e6rtTyag1g&ratebypass=yes",
      "vcodec": "vp9",
      "format_note": "360p",
      "height": 360,
      "downloader_options": {
        "http_chunk_size": 10485760
      },
      "width": 640,
      "ext": "webm",
      "filesize": 5116254,
      "fps": 30,
      "format_id": "243",
      "player_url": null,
      "http_headers": {
        "Accept-Charset": "ISO-8859-1,utf-8;q=0.7,*;q=0.7",
        "Accept-Language": "en-us,en;q=0.5",
        "Accept-Encoding": "gzip, deflate",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.98 Safari/537.36"
      },
      "acodec": "none"
    },
    {
      "asr": null,
      "tbr": 456.005,
      "protocol": "https",
      "format": "134 - 640x360 (360p)",
      "url": "https://r3---sn-hgn7yn76.googlevideo.com/videoplayback?expire=1588285465&ei=ufuqXrS_L_evxN8P4_aTyAI&ip=2a01%3Acb14%3A82d5%3A3100%3A3d11%3A46bf%3A19ff%3Abfee&id=o-AICBbNTYG9Lw9Zv5TtoSk7VSVDwUnulPHwCTPfwG5-6h&itag=134&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C278%2C394%2C395%2C396%2C397%2C398%2C399&source=youtube&requiressl=yes&mh=8U&mm=31%2C29&mn=sn-hgn7yn76%2Csn-hgn7rne7&ms=au%2Crdu&mv=m&mvi=2&pl=30&initcwndbps=658750&vprv=1&mime=video%2Fmp4&gir=yes&clen=4457534&dur=250.249&lmt=1581344776349885&mt=1588263755&fvip=3&keepalive=yes&c=WEB&txp=5535432&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJpPlLswRAIgd9hiGG_nlofppOEwgFZGeC7DkK1c8Je5PCI6z1fqFrwCIHrg6VKfOOqarDN4xM1UfBXAmGlWXSRMWx6XqjjFJzhe&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=ALrAebAwRAIgWnmZx5A9Me3uxo9Sco7eBQBRz97T8sqP_-BoN7bPBbECIHNxteEJx5p75dDRlqMCD_wPU7ZYHQz-q3e6rtTyag1g&ratebypass=yes",
      "vcodec": "avc1.4d401e",
      "format_note": "360p",
      "height": 360,
      "downloader_options": {
        "http_chunk_size": 10485760
      },
      "width": 640,
      "ext": "mp4",
      "filesize": 4457534,
      "fps": 30,
      "format_id": "134",
      "player_url": null,
      "http_headers": {
        "Accept-Charset": "ISO-8859-1,utf-8;q=0.7,*;q=0.7",
        "Accept-Language": "en-us,en;q=0.5",
        "Accept-Encoding": "gzip, deflate",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.98 Safari/537.36"
      },
      "acodec": "none"
    },
    {
      "asr": null,
      "tbr": 543.588,
      "protocol": "https",
      "format": "397 - 854x480 (480p)",
      "url": "https://r3---sn-hgn7yn76.googlevideo.com/videoplayback?expire=1588285465&ei=ufuqXrS_L_evxN8P4_aTyAI&ip=2a01%3Acb14%3A82d5%3A3100%3A3d11%3A46bf%3A19ff%3Abfee&id=o-AICBbNTYG9Lw9Zv5TtoSk7VSVDwUnulPHwCTPfwG5-6h&itag=397&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C278%2C394%2C395%2C396%2C397%2C398%2C399&source=youtube&requiressl=yes&mh=8U&mm=31%2C29&mn=sn-hgn7yn76%2Csn-hgn7rne7&ms=au%2Crdu&mv=m&mvi=2&pl=30&initcwndbps=658750&vprv=1&mime=video%2Fmp4&gir=yes&clen=7860743&dur=250.249&lmt=1581348792092562&mt=1588263755&fvip=3&keepalive=yes&c=WEB&txp=5531432&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJpPlLswRQIhAPw-G8xWboLP7VJE0qgpukeK8LAzutcx_bG2LyLYXB-JAiANIVMigS_CIQgWQvGeQc6qDSUTHV7H8uJMQO_X7XaTkA%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=ALrAebAwRAIgWnmZx5A9Me3uxo9Sco7eBQBRz97T8sqP_-BoN7bPBbECIHNxteEJx5p75dDRlqMCD_wPU7ZYHQz-q3e6rtTyag1g&ratebypass=yes",
      "vcodec": "av01.0.04M.08",
      "format_note": "480p",
      "player_url": null,
      "downloader_options": {
        "http_chunk_size": 10485760
      },
      "width": 854,
      "ext": "mp4",
      "filesize": 7860743,
      "fps": 30,
      "format_id": "397",
      "height": 480,
      "http_headers": {
        "Accept-Charset": "ISO-8859-1,utf-8;q=0.7,*;q=0.7",
        "Accept-Language": "en-us,en;q=0.5",
        "Accept-Encoding": "gzip, deflate",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.98 Safari/537.36"
      },
      "acodec": "none"
    },
    {
      "asr": null,
      "tbr": 622.089,
      "protocol": "https",
      "format": "244 - 854x480 (480p)",
      "url": "https://r3---sn-hgn7yn76.googlevideo.com/videoplayback?expire=1588285465&ei=ufuqXrS_L_evxN8P4_aTyAI&ip=2a01%3Acb14%3A82d5%3A3100%3A3d11%3A46bf%3A19ff%3Abfee&id=o-AICBbNTYG9Lw9Zv5TtoSk7VSVDwUnulPHwCTPfwG5-6h&itag=244&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C278%2C394%2C395%2C396%2C397%2C398%2C399&source=youtube&requiressl=yes&mh=8U&mm=31%2C29&mn=sn-hgn7yn76%2Csn-hgn7rne7&ms=au%2Crdu&mv=m&mvi=2&pl=30&initcwndbps=658750&vprv=1&mime=video%2Fwebm&gir=yes&clen=7412199&dur=250.250&lmt=1581345642360212&mt=1588263755&fvip=3&keepalive=yes&c=WEB&txp=5535432&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJpPlLswRAIgMPz2IqVcLkxwhQNtwSbvT9ZviuToo-VuAaUA-DoP-y8CIGdYpTbqzNQJ2dgQ_cXjpYOsUgbpn1wgOKlOQN26ntWN&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=ALrAebAwRAIgWnmZx5A9Me3uxo9Sco7eBQBRz97T8sqP_-BoN7bPBbECIHNxteEJx5p75dDRlqMCD_wPU7ZYHQz-q3e6rtTyag1g&ratebypass=yes",
      "vcodec": "vp9",
      "format_note": "480p",
      "height": 480,
      "downloader_options": {
        "http_chunk_size": 10485760
      },
      "width": 854,
      "ext": "webm",
      "filesize": 7412199,
      "fps": 30,
      "format_id": "244",
      "player_url": null,
      "http_headers": {
        "Accept-Charset": "ISO-8859-1,utf-8;q=0.7,*;q=0.7",
        "Accept-Language": "en-us,en;q=0.5",
        "Accept-Encoding": "gzip, deflate",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.98 Safari/537.36"
      },
      "acodec": "none"
    },
    {
      "asr": null,
      "tbr": 625.515,
      "protocol": "https",
      "format": "135 - 854x480 (480p)",
      "url": "https://r3---sn-hgn7yn76.googlevideo.com/videoplayback?expire=1588285465&ei=ufuqXrS_L_evxN8P4_aTyAI&ip=2a01%3Acb14%3A82d5%3A3100%3A3d11%3A46bf%3A19ff%3Abfee&id=o-AICBbNTYG9Lw9Zv5TtoSk7VSVDwUnulPHwCTPfwG5-6h&itag=135&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C278%2C394%2C395%2C396%2C397%2C398%2C399&source=youtube&requiressl=yes&mh=8U&mm=31%2C29&mn=sn-hgn7yn76%2Csn-hgn7rne7&ms=au%2Crdu&mv=m&mvi=2&pl=30&initcwndbps=658750&vprv=1&mime=video%2Fmp4&gir=yes&clen=6220582&dur=250.249&lmt=1581344776338380&mt=1588263755&fvip=3&keepalive=yes&c=WEB&txp=5535432&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJpPlLswRQIgYJleu-YyxvHWImcbumtXdIgdXDYaL0ccy_A_LX3tNU0CIQC6QcpbZLUym_kDed6ZmaVMMzriG4AJzprx2L4AdYlA2Q%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=ALrAebAwRAIgWnmZx5A9Me3uxo9Sco7eBQBRz97T8sqP_-BoN7bPBbECIHNxteEJx5p75dDRlqMCD_wPU7ZYHQz-q3e6rtTyag1g&ratebypass=yes",
      "vcodec": "avc1.4d401f",
      "format_note": "480p",
      "height": 480,
      "downloader_options": {
        "http_chunk_size": 10485760
      },
      "width": 854,
      "ext": "mp4",
      "filesize": 6220582,
      "fps": 30,
      "format_id": "135",
      "player_url": null,
      "http_headers": {
        "Accept-Charset": "ISO-8859-1,utf-8;q=0.7,*;q=0.7",
        "Accept-Language": "en-us,en;q=0.5",
        "Accept-Encoding": "gzip, deflate",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.98 Safari/537.36"
      },
      "acodec": "none"
    },
    {
      "asr": null,
      "tbr": 895.049,
      "protocol": "https",
      "format": "136 - 1280x720 (720p)",
      "url": "https://r3---sn-hgn7yn76.googlevideo.com/videoplayback?expire=1588285465&ei=ufuqXrS_L_evxN8P4_aTyAI&ip=2a01%3Acb14%3A82d5%3A3100%3A3d11%3A46bf%3A19ff%3Abfee&id=o-AICBbNTYG9Lw9Zv5TtoSk7VSVDwUnulPHwCTPfwG5-6h&itag=136&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C278%2C394%2C395%2C396%2C397%2C398%2C399&source=youtube&requiressl=yes&mh=8U&mm=31%2C29&mn=sn-hgn7yn76%2Csn-hgn7rne7&ms=au%2Crdu&mv=m&mvi=2&pl=30&initcwndbps=658750&vprv=1&mime=video%2Fmp4&gir=yes&clen=9642837&dur=250.249&lmt=1581344776338834&mt=1588263755&fvip=3&keepalive=yes&c=WEB&txp=5535432&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJpPlLswRQIhAODln3Lvcl-Ce-4QIkT298OLL3NpzpfHpDtj4idMN1ULAiAQSCPsR8RVt0RRrPuIqJdNHVIiegGN6qtr45z--_flCw%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=ALrAebAwRAIgWnmZx5A9Me3uxo9Sco7eBQBRz97T8sqP_-BoN7bPBbECIHNxteEJx5p75dDRlqMCD_wPU7ZYHQz-q3e6rtTyag1g&ratebypass=yes",
      "vcodec": "avc1.4d401f",
      "format_note": "720p",
      "height": 720,
      "downloader_options": {
        "http_chunk_size": 10485760
      },
      "width": 1280,
      "ext": "mp4",
      "filesize": 9642837,
      "fps": 30,
      "format_id": "136",
      "player_url": null,
      "http_headers": {
        "Accept-Charset": "ISO-8859-1,utf-8;q=0.7,*;q=0.7",
        "Accept-Language": "en-us,en;q=0.5",
        "Accept-Encoding": "gzip, deflate",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.98 Safari/537.36"
      },
      "acodec": "none"
    },
    {
      "asr": null,
      "tbr": 1040.406,
      "protocol": "https",
      "format": "247 - 1280x720 (720p)",
      "url": "https://r3---sn-hgn7yn76.googlevideo.com/videoplayback?expire=1588285465&ei=ufuqXrS_L_evxN8P4_aTyAI&ip=2a01%3Acb14%3A82d5%3A3100%3A3d11%3A46bf%3A19ff%3Abfee&id=o-AICBbNTYG9Lw9Zv5TtoSk7VSVDwUnulPHwCTPfwG5-6h&itag=247&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C278%2C394%2C395%2C396%2C397%2C398%2C399&source=youtube&requiressl=yes&mh=8U&mm=31%2C29&mn=sn-hgn7yn76%2Csn-hgn7rne7&ms=au%2Crdu&mv=m&mvi=2&pl=30&initcwndbps=658750&vprv=1&mime=video%2Fwebm&gir=yes&clen=12009575&dur=250.250&lmt=1581345642292962&mt=1588263755&fvip=3&keepalive=yes&c=WEB&txp=5535432&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJpPlLswRQIhAOd8xmik-P3qqye98J7S-zyzye8PbAesx2zm8dbVFuIqAiAZWcc5ga1Q-xSUAx7V1qAZVLxgbKGa2mA59GjTKXGVKw%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=ALrAebAwRAIgWnmZx5A9Me3uxo9Sco7eBQBRz97T8sqP_-BoN7bPBbECIHNxteEJx5p75dDRlqMCD_wPU7ZYHQz-q3e6rtTyag1g&ratebypass=yes",
      "vcodec": "vp9",
      "format_note": "720p",
      "height": 720,
      "downloader_options": {
        "http_chunk_size": 10485760
      },
      "width": 1280,
      "ext": "webm",
      "filesize": 12009575,
      "fps": 30,
      "format_id": "247",
      "player_url": null,
      "http_headers": {
        "Accept-Charset": "ISO-8859-1,utf-8;q=0.7,*;q=0.7",
        "Accept-Language": "en-us,en;q=0.5",
        "Accept-Encoding": "gzip, deflate",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.98 Safari/537.36"
      },
      "acodec": "none"
    },
    {
      "asr": null,
      "tbr": 1070.547,
      "protocol": "https",
      "format": "398 - 1280x720 (720p)",
      "url": "https://r3---sn-hgn7yn76.googlevideo.com/videoplayback?expire=1588285465&ei=ufuqXrS_L_evxN8P4_aTyAI&ip=2a01%3Acb14%3A82d5%3A3100%3A3d11%3A46bf%3A19ff%3Abfee&id=o-AICBbNTYG9Lw9Zv5TtoSk7VSVDwUnulPHwCTPfwG5-6h&itag=398&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C278%2C394%2C395%2C396%2C397%2C398%2C399&source=youtube&requiressl=yes&mh=8U&mm=31%2C29&mn=sn-hgn7yn76%2Csn-hgn7rne7&ms=au%2Crdu&mv=m&mvi=2&pl=30&initcwndbps=658750&vprv=1&mime=video%2Fmp4&gir=yes&clen=16227000&dur=250.249&lmt=1581348811020691&mt=1588263755&fvip=3&keepalive=yes&c=WEB&txp=5531432&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJpPlLswRgIhALa07XWlqbpOhcrXDIfC9pa68MTXlozejVnoyr-wMbbsAiEA6ryRO9ID2-JsasA5t-htmfK6e6X6GEky-9q6zCwEwS0%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=ALrAebAwRAIgWnmZx5A9Me3uxo9Sco7eBQBRz97T8sqP_-BoN7bPBbECIHNxteEJx5p75dDRlqMCD_wPU7ZYHQz-q3e6rtTyag1g&ratebypass=yes",
      "vcodec": "av01.0.05M.08",
      "format_note": "720p",
      "player_url": null,
      "downloader_options": {
        "http_chunk_size": 10485760
      },
      "width": 1280,
      "ext": "mp4",
      "filesize": 16227000,
      "fps": 30,
      "format_id": "398",
      "height": 720,
      "http_headers": {
        "Accept-Charset": "ISO-8859-1,utf-8;q=0.7,*;q=0.7",
        "Accept-Language": "en-us,en;q=0.5",
        "Accept-Encoding": "gzip, deflate",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.98 Safari/537.36"
      },
      "acodec": "none"
    },
    {
      "asr": null,
      "tbr": 1868.578,
      "protocol": "https",
      "format": "399 - 1920x1080 (1080p)",
      "url": "https://r3---sn-hgn7yn76.googlevideo.com/videoplayback?expire=1588285465&ei=ufuqXrS_L_evxN8P4_aTyAI&ip=2a01%3Acb14%3A82d5%3A3100%3A3d11%3A46bf%3A19ff%3Abfee&id=o-AICBbNTYG9Lw9Zv5TtoSk7VSVDwUnulPHwCTPfwG5-6h&itag=399&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C278%2C394%2C395%2C396%2C397%2C398%2C399&source=youtube&requiressl=yes&mh=8U&mm=31%2C29&mn=sn-hgn7yn76%2Csn-hgn7rne7&ms=au%2Crdu&mv=m&mvi=2&pl=30&initcwndbps=658750&vprv=1&mime=video%2Fmp4&gir=yes&clen=29820096&dur=250.249&lmt=1581349408498414&mt=1588263755&fvip=3&keepalive=yes&c=WEB&txp=5531432&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJpPlLswRQIgbVdNA9x9CE0XeaG5Vj15M6ckcaHcb-nBQXftKWSH_mACIQDftulUJION0XL8nuFv9t6WO-LDZ-uuSapzBHkvKZzPgw%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=ALrAebAwRAIgWnmZx5A9Me3uxo9Sco7eBQBRz97T8sqP_-BoN7bPBbECIHNxteEJx5p75dDRlqMCD_wPU7ZYHQz-q3e6rtTyag1g&ratebypass=yes",
      "vcodec": "av01.0.08M.08",
      "format_note": "1080p",
      "player_url": null,
      "downloader_options": {
        "http_chunk_size": 10485760
      },
      "width": 1920,
      "ext": "mp4",
      "filesize": 29820096,
      "fps": 30,
      "format_id": "399",
      "height": 1080,
      "http_headers": {
        "Accept-Charset": "ISO-8859-1,utf-8;q=0.7,*;q=0.7",
        "Accept-Language": "en-us,en;q=0.5",
        "Accept-Encoding": "gzip, deflate",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.98 Safari/537.36"
      },
      "acodec": "none"
    },
    {
      "asr": null,
      "tbr": 2480.663,
      "protocol": "https",
      "format": "248 - 1920x1080 (1080p)",
      "url": "https://r3---sn-hgn7yn76.googlevideo.com/videoplayback?expire=1588285465&ei=ufuqXrS_L_evxN8P4_aTyAI&ip=2a01%3Acb14%3A82d5%3A3100%3A3d11%3A46bf%3A19ff%3Abfee&id=o-AICBbNTYG9Lw9Zv5TtoSk7VSVDwUnulPHwCTPfwG5-6h&itag=248&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C278%2C394%2C395%2C396%2C397%2C398%2C399&source=youtube&requiressl=yes&mh=8U&mm=31%2C29&mn=sn-hgn7yn76%2Csn-hgn7rne7&ms=au%2Crdu&mv=m&mvi=2&pl=30&initcwndbps=658750&vprv=1&mime=video%2Fwebm&gir=yes&clen=32096497&dur=250.250&lmt=1581345513863011&mt=1588263755&fvip=3&keepalive=yes&c=WEB&txp=5535432&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJpPlLswRQIhAJAzXVQkrBieED3f4LSyKh8gXOJz3EeO52wCXTbeef3vAiB9z8iz5vNULQNPB_Gt7ApkbIUg_mCpjd1ALfhfLpHdiQ%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=ALrAebAwRAIgWnmZx5A9Me3uxo9Sco7eBQBRz97T8sqP_-BoN7bPBbECIHNxteEJx5p75dDRlqMCD_wPU7ZYHQz-q3e6rtTyag1g&ratebypass=yes",
      "vcodec": "vp9",
      "format_note": "1080p",
      "height": 1080,
      "downloader_options": {
        "http_chunk_size": 10485760
      },
      "width": 1920,
      "ext": "webm",
      "filesize": 32096497,
      "fps": 30,
      "format_id": "248",
      "player_url": null,
      "http_headers": {
        "Accept-Charset": "ISO-8859-1,utf-8;q=0.7,*;q=0.7",
        "Accept-Language": "en-us,en;q=0.5",
        "Accept-Encoding": "gzip, deflate",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.98 Safari/537.36"
      },
      "acodec": "none"
    },
    {
      "asr": null,
      "tbr": 2640.614,
      "protocol": "https",
      "format": "137 - 1920x1080 (1080p)",
      "url": "https://r3---sn-hgn7yn76.googlevideo.com/videoplayback?expire=1588285465&ei=ufuqXrS_L_evxN8P4_aTyAI&ip=2a01%3Acb14%3A82d5%3A3100%3A3d11%3A46bf%3A19ff%3Abfee&id=o-AICBbNTYG9Lw9Zv5TtoSk7VSVDwUnulPHwCTPfwG5-6h&itag=137&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C278%2C394%2C395%2C396%2C397%2C398%2C399&source=youtube&requiressl=yes&mh=8U&mm=31%2C29&mn=sn-hgn7yn76%2Csn-hgn7rne7&ms=au%2Crdu&mv=m&mvi=2&pl=30&initcwndbps=658750&vprv=1&mime=video%2Fmp4&gir=yes&clen=30282740&dur=250.249&lmt=1581344786726120&mt=1588263755&fvip=3&keepalive=yes&c=WEB&txp=5535432&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJpPlLswRQIgI2GEk-uTObVq1SxcEDWMKZMQsTOJhEQ68FOYThpVl8oCIQDUBwXxDrdbM8yGCZwa070CYlON9jLHfa56y63o2DboiQ%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=ALrAebAwRAIgWnmZx5A9Me3uxo9Sco7eBQBRz97T8sqP_-BoN7bPBbECIHNxteEJx5p75dDRlqMCD_wPU7ZYHQz-q3e6rtTyag1g&ratebypass=yes",
      "vcodec": "avc1.640028",
      "format_note": "1080p",
      "height": 1080,
      "downloader_options": {
        "http_chunk_size": 10485760
      },
      "width": 1920,
      "ext": "mp4",
      "filesize": 30282740,
      "fps": 30,
      "format_id": "137",
      "player_url": null,
      "http_headers": {
        "Accept-Charset": "ISO-8859-1,utf-8;q=0.7,*;q=0.7",
        "Accept-Language": "en-us,en;q=0.5",
        "Accept-Encoding": "gzip, deflate",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.98 Safari/537.36"
      },
      "acodec": "none"
    },
    {
      "asr": 44100,
      "tbr": 416.744,
      "protocol": "https",
      "format": "18 - 640x360 (360p)",
      "url": "https://r3---sn-hgn7yn76.googlevideo.com/videoplayback?expire=1588285465&ei=ufuqXrS_L_evxN8P4_aTyAI&ip=2a01%3Acb14%3A82d5%3A3100%3A3d11%3A46bf%3A19ff%3Abfee&id=o-AICBbNTYG9Lw9Zv5TtoSk7VSVDwUnulPHwCTPfwG5-6h&itag=18&source=youtube&requiressl=yes&mh=8U&mm=31%2C29&mn=sn-hgn7yn76%2Csn-hgn7rne7&ms=au%2Crdu&mv=m&mvi=2&pl=30&initcwndbps=658750&vprv=1&mime=video%2Fmp4&gir=yes&clen=13036277&ratebypass=yes&dur=250.311&lmt=1581342989923232&mt=1588263755&fvip=3&c=WEB&txp=5531432&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AJpPlLswRQIgLxjH0yfl34kqENjMnbGTnA7pSJ4UwiZrxsI4ZF-0p2ACIQDJnTwTBiYSDVjxcSOzaSoE0R87ZejzzG6S4IT8drrtnw%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=ALrAebAwRAIgWnmZx5A9Me3uxo9Sco7eBQBRz97T8sqP_-BoN7bPBbECIHNxteEJx5p75dDRlqMCD_wPU7ZYHQz-q3e6rtTyag1g",
      "vcodec": "avc1.42001E",
      "format_note": "360p",
      "ext": "mp4",
      "player_url": null,
      "width": 640,
      "abr": 96,
      "filesize": 13036277,
      "fps": null,
      "format_id": "18",
      "height": 360,
      "http_headers": {
        "Accept-Charset": "ISO-8859-1,utf-8;q=0.7,*;q=0.7",
        "Accept-Language": "en-us,en;q=0.5",
        "Accept-Encoding": "gzip, deflate",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.98 Safari/537.36"
      },
      "acodec": "mp4a.40.2"
    },
    {
      "asr": 44100,
      "tbr": 437.271,
      "protocol": "https",
      "format": "22 - 1280x720 (720p)",
      "url": "https://r3---sn-hgn7yn76.googlevideo.com/videoplayback?expire=1588285465&ei=ufuqXrS_L_evxN8P4_aTyAI&ip=2a01%3Acb14%3A82d5%3A3100%3A3d11%3A46bf%3A19ff%3Abfee&id=o-AICBbNTYG9Lw9Zv5TtoSk7VSVDwUnulPHwCTPfwG5-6h&itag=22&source=youtube&requiressl=yes&mh=8U&mm=31%2C29&mn=sn-hgn7yn76%2Csn-hgn7rne7&ms=au%2Crdu&mv=m&mvi=2&pl=30&initcwndbps=658750&vprv=1&mime=video%2Fmp4&ratebypass=yes&dur=250.311&lmt=1581344787024885&mt=1588263755&fvip=3&c=WEB&txp=5535432&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cratebypass%2Cdur%2Clmt&sig=AJpPlLswRgIhAN11Ts3Gz2H61iH-5IS3vZwdTBN-GEoMyLLbl0Yagmy7AiEA6I5r8BxafzH-Uoo4oknswgiFAxiupHPRFq6EjFzYuEQ%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=ALrAebAwRAIgWnmZx5A9Me3uxo9Sco7eBQBRz97T8sqP_-BoN7bPBbECIHNxteEJx5p75dDRlqMCD_wPU7ZYHQz-q3e6rtTyag1g",
      "vcodec": "avc1.64001F",
      "format_note": "720p",
      "ext": "mp4",
      "player_url": null,
      "width": 1280,
      "abr": 192,
      "filesize": null,
      "fps": null,
      "format_id": "22",
      "height": 720,
      "http_headers": {
        "Accept-Charset": "ISO-8859-1,utf-8;q=0.7,*;q=0.7",
        "Accept-Language": "en-us,en;q=0.5",
        "Accept-Encoding": "gzip, deflate",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.98 Safari/537.36"
      },
      "acodec": "mp4a.40.2"
    }
  ],
  "channel_url": "http://www.youtube.com/channel/UCSjK-DjIg2xl7l7WC-Tr1sg",
  "vcodec": "avc1.64001F",
  "age_limit": 0,
  "_duration_raw": 250,
  "_duration_hms": "00:04:10"
}
```
