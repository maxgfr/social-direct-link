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
  "upload_date": "20180720",
  "protocol": "https",
  "extractor": "youtube",
  "series": null,
  "format": "22 - 1280x720 (720p)",
  "format_note": "720p",
  "chapters": null,
  "height": 720,
  "acodec": "mp4a.40.2",
  "like_count": 191388,
  "duration": "2:40",
  "fulltitle": "Naruto and Sasuke vs Momoshiki | Boruto: Naruto Next Generations",
  "player_url": "/s/player/0374edcb/player_ias.vflset/en_US/base.js",
  "playlist_index": null,
  "album": null,
  "view_count": 17967072,
  "playlist": null,
  "title": "Naruto and Sasuke vs Momoshiki | Boruto: Naruto Next Generations",
  "_filename": "Naruto and Sasuke vs Momoshiki _ Boruto - Naruto Next Generations-RzClCJFpSoM.mp4",
  "creator": null,
  "ext": "mp4",
  "id": "RzClCJFpSoM",
  "dislike_count": 3016,
  "average_rating": 4.9379435,
  "abr": 192,
  "uploader_url": "http://www.youtube.com/user/CrunchyrollPromo",
  "categories": [
    "Film & Animation"
  ],
  "fps": null,
  "season_number": null,
  "annotations": null,
  "webpage_url_basename": "watch",
  "filesize": null,
  "display_id": "RzClCJFpSoM",
  "asr": 44100,
  "automatic_captions": {},
  "description": "Naruto and Sasuke face off against Momoshiki to show him the greatest ninja duo in the world, pulling out all of their oldest tricks with new twists! Watch Boruto on Crunchyroll: https://got.cr/Watch-Boruto\n\nCrunchyroll Collection brings you the latest clips, OPs and more from your favorite anime! Don't have time for a full episode but want to catch up on the best scenes? We've got them!\n\nCHECK OUT OUR OTHER SERIES!\nLearn about your favorite anime studios! 👉  http://bit.ly/AnimeAcademyPlaylist\nNeed new anime recommendations? 👉  http://got.cr/QReviewPlaylist\nWatch FULL anime episodes 👉  http://got.cr/WatchFullEps\n\nSUBSCRIBE 🌟  http://bit.ly/crunchyrollsubscribe\nFREE 14-DAY CRUNCHYROLL TRIAL 🌟  https://got.cr/14DaysFree\n\nCrunchyroll is the destination for the world's largest and latest lineup of anime and manga. Crunchyroll brings hit anime each season, straight from Japanese studios to millions of viewers globally, translated professionally in multiple languages. Watch free or go Premium to enjoy in HD or without ads.!\n\nFACEBOOK: https://www.facebook.com/Crunchyroll\nTWITTER: https://twitter.com/Crunchyroll\nINSTAGRAM: https://www.instagram.com/crunchyroll\nTUMBLR: http://crunchyroll.tumblr.com",
  "tags": [
    "crunchyroll",
    "anime",
    "japan",
    "anime preview",
    "anime full episode",
    "anime trailer",
    "crunchyroll collection",
    "boruto",
    "naruto",
    "next generations",
    "masashi kishimoto",
    "episode 65",
    "ep65",
    "sasuke",
    "momoshiki",
    "fight"
  ],
  "track": null,
  "requested_subtitles": null,
  "start_time": null,
  "tbr": 1158.693,
  "uploader": "Crunchyroll Collection",
  "format_id": "22",
  "episode_number": null,
  "uploader_id": "CrunchyrollPromo",
  "subtitles": {},
  "release_year": null,
  "http_headers": {
    "Accept-Charset": "ISO-8859-1,utf-8;q=0.7,*;q=0.7",
    "Accept-Language": "en-us,en;q=0.5",
    "Accept-Encoding": "gzip, deflate",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3724.1 Safari/537.36"
  },
  "thumbnails": [
    {
      "url": "https://i.ytimg.com/vi/RzClCJFpSoM/maxresdefault.jpg",
      "id": "0"
    }
  ],
  "license": null,
  "artist": null,
  "url": "https://r5---sn-hgn7yn7s.googlevideo.com/videoplayback?expire=1588284558&ei=LviqXtfDCpS21wa7qJww&ip=2a01%3Acb14%3A82d5%3A3100%3A3d11%3A46bf%3A19ff%3Abfee&id=o-AHMywiauRuVcRIWJoUPcIehrPDl9lxBtozIzDrvX1_X7&itag=22&source=youtube&requiressl=yes&mh=M3&mm=31%2C29&mn=sn-hgn7yn7s%2Csn-hgn7rnee&ms=au%2Crdu&mv=m&mvi=4&pl=30&gcr=fr&initcwndbps=685000&vprv=1&mime=video%2Fmp4&ratebypass=yes&dur=160.310&lmt=1540704871546840&mt=1588262854&fvip=5&c=WEB&txp=5531432&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cgcr%2Cvprv%2Cmime%2Cratebypass%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=ALrAebAwRQIgbK5vyeYZSV4F73SEJzPqKndSJsnmoEwmvkPAcDh29UcCIQDLFQtxIXSQN90NSy2R6WgFiev-cw7t93EjZI8GORACZg%3D%3D&sig=AJpPlLswRQIhAI4OmCCI5bhyJiwxd1mi_XMntzgyiyiom1wqldDc9QQSAiBV_8_eFce99fZTIn8m53b7J1ldn_TKV7zEQ0udPxNcbQ==",
  "extractor_key": "Youtube",
  "release_date": null,
  "alt_title": null,
  "thumbnail": "https://i.ytimg.com/vi/RzClCJFpSoM/maxresdefault.jpg",
  "channel_id": "UC6pGDc4bFGD1_36IKv3FnYg",
  "is_live": null,
  "width": 1280,
  "end_time": null,
  "webpage_url": "https://www.youtube.com/watch?v=RzClCJFpSoM",
  "formats": [
    {
      "asr": 48000,
      "tbr": 49.503,
      "protocol": "https",
      "format": "249 - audio only (tiny)",
      "url": "https://r5---sn-hgn7yn7s.googlevideo.com/videoplayback?expire=1588284558&ei=LviqXtfDCpS21wa7qJww&ip=2a01%3Acb14%3A82d5%3A3100%3A3d11%3A46bf%3A19ff%3Abfee&id=o-AHMywiauRuVcRIWJoUPcIehrPDl9lxBtozIzDrvX1_X7&itag=249&source=youtube&requiressl=yes&mh=M3&mm=31%2C29&mn=sn-hgn7yn7s%2Csn-hgn7rnee&ms=au%2Crdu&mv=m&mvi=4&pl=30&gcr=fr&initcwndbps=685000&vprv=1&mime=audio%2Fwebm&gir=yes&clen=872044&dur=160.261&lmt=1540705805806482&mt=1588262854&fvip=5&keepalive=yes&c=WEB&txp=5511222&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cgcr%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=ALrAebAwRQIgbK5vyeYZSV4F73SEJzPqKndSJsnmoEwmvkPAcDh29UcCIQDLFQtxIXSQN90NSy2R6WgFiev-cw7t93EjZI8GORACZg%3D%3D&sig=AJpPlLswRAIgeP4RPEX7eMnc0YG5pa3MYqjkPwDx8rzLmjhJ9LTWUu8CIGBm8hhVidi24UOcfkj6GR0eeYgTMchVGPEBzy1thESN&ratebypass=yes",
      "vcodec": "none",
      "format_note": "tiny",
      "abr": 50,
      "player_url": "/s/player/0374edcb/player_ias.vflset/en_US/base.js",
      "downloader_options": {
        "http_chunk_size": 10485760
      },
      "width": null,
      "ext": "webm",
      "filesize": 872044,
      "fps": null,
      "format_id": "249",
      "height": null,
      "http_headers": {
        "Accept-Charset": "ISO-8859-1,utf-8;q=0.7,*;q=0.7",
        "Accept-Language": "en-us,en;q=0.5",
        "Accept-Encoding": "gzip, deflate",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3724.1 Safari/537.36"
      },
      "acodec": "opus"
    },
    {
      "asr": 48000,
      "tbr": 65.169,
      "protocol": "https",
      "format": "250 - audio only (tiny)",
      "url": "https://r5---sn-hgn7yn7s.googlevideo.com/videoplayback?expire=1588284558&ei=LviqXtfDCpS21wa7qJww&ip=2a01%3Acb14%3A82d5%3A3100%3A3d11%3A46bf%3A19ff%3Abfee&id=o-AHMywiauRuVcRIWJoUPcIehrPDl9lxBtozIzDrvX1_X7&itag=250&source=youtube&requiressl=yes&mh=M3&mm=31%2C29&mn=sn-hgn7yn7s%2Csn-hgn7rnee&ms=au%2Crdu&mv=m&mvi=4&pl=30&gcr=fr&initcwndbps=685000&vprv=1&mime=audio%2Fwebm&gir=yes&clen=1144612&dur=160.261&lmt=1540705884021572&mt=1588262854&fvip=5&keepalive=yes&c=WEB&txp=5511222&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cgcr%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=ALrAebAwRQIgbK5vyeYZSV4F73SEJzPqKndSJsnmoEwmvkPAcDh29UcCIQDLFQtxIXSQN90NSy2R6WgFiev-cw7t93EjZI8GORACZg%3D%3D&sig=AJpPlLswRQIhAL8PNZ5JOYhqdRlDFN7C6zqmJPtYPJGslgk1Grl7E9-mAiAm-NGkLwLk6IpvrRbm6YSM1SBxKUpzfF2mVkSjdGjKjw==&ratebypass=yes",
      "vcodec": "none",
      "format_note": "tiny",
      "abr": 70,
      "player_url": "/s/player/0374edcb/player_ias.vflset/en_US/base.js",
      "downloader_options": {
        "http_chunk_size": 10485760
      },
      "width": null,
      "ext": "webm",
      "filesize": 1144612,
      "fps": null,
      "format_id": "250",
      "height": null,
      "http_headers": {
        "Accept-Charset": "ISO-8859-1,utf-8;q=0.7,*;q=0.7",
        "Accept-Language": "en-us,en;q=0.5",
        "Accept-Encoding": "gzip, deflate",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3724.1 Safari/537.36"
      },
      "acodec": "opus"
    },
    {
      "asr": 48000,
      "tbr": 129.021,
      "protocol": "https",
      "format": "251 - audio only (tiny)",
      "url": "https://r5---sn-hgn7yn7s.googlevideo.com/videoplayback?expire=1588284558&ei=LviqXtfDCpS21wa7qJww&ip=2a01%3Acb14%3A82d5%3A3100%3A3d11%3A46bf%3A19ff%3Abfee&id=o-AHMywiauRuVcRIWJoUPcIehrPDl9lxBtozIzDrvX1_X7&itag=251&source=youtube&requiressl=yes&mh=M3&mm=31%2C29&mn=sn-hgn7yn7s%2Csn-hgn7rnee&ms=au%2Crdu&mv=m&mvi=4&pl=30&gcr=fr&initcwndbps=685000&vprv=1&mime=audio%2Fwebm&gir=yes&clen=2278039&dur=160.261&lmt=1540705857071262&mt=1588262854&fvip=5&keepalive=yes&c=WEB&txp=5511222&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cgcr%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=ALrAebAwRQIgbK5vyeYZSV4F73SEJzPqKndSJsnmoEwmvkPAcDh29UcCIQDLFQtxIXSQN90NSy2R6WgFiev-cw7t93EjZI8GORACZg%3D%3D&sig=AJpPlLswRQIgLZcAdiZRRdzL1VJebSH7DRHdLgTuYcVZ7drcW_E8dlECIQD_5oVC7DcyFuWxoFwS29JscZKoFUCZlI6WETPH-Est5Q==&ratebypass=yes",
      "vcodec": "none",
      "format_note": "tiny",
      "abr": 160,
      "player_url": "/s/player/0374edcb/player_ias.vflset/en_US/base.js",
      "downloader_options": {
        "http_chunk_size": 10485760
      },
      "width": null,
      "ext": "webm",
      "filesize": 2278039,
      "fps": null,
      "format_id": "251",
      "height": null,
      "http_headers": {
        "Accept-Charset": "ISO-8859-1,utf-8;q=0.7,*;q=0.7",
        "Accept-Language": "en-us,en;q=0.5",
        "Accept-Encoding": "gzip, deflate",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3724.1 Safari/537.36"
      },
      "acodec": "opus"
    },
    {
      "asr": 44100,
      "tbr": 129.668,
      "container": "m4a_dash",
      "format": "140 - audio only (tiny)",
      "url": "https://r5---sn-hgn7yn7s.googlevideo.com/videoplayback?expire=1588284558&ei=LviqXtfDCpS21wa7qJww&ip=2a01%3Acb14%3A82d5%3A3100%3A3d11%3A46bf%3A19ff%3Abfee&id=o-AHMywiauRuVcRIWJoUPcIehrPDl9lxBtozIzDrvX1_X7&itag=140&source=youtube&requiressl=yes&mh=M3&mm=31%2C29&mn=sn-hgn7yn7s%2Csn-hgn7rnee&ms=au%2Crdu&mv=m&mvi=4&pl=30&gcr=fr&initcwndbps=685000&vprv=1&mime=audio%2Fmp4&gir=yes&clen=2546853&dur=160.310&lmt=1540702484644109&mt=1588262854&fvip=5&keepalive=yes&c=WEB&txp=5533432&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cgcr%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=ALrAebAwRQIgbK5vyeYZSV4F73SEJzPqKndSJsnmoEwmvkPAcDh29UcCIQDLFQtxIXSQN90NSy2R6WgFiev-cw7t93EjZI8GORACZg%3D%3D&sig=AJpPlLswRQIhALWeUVd4drCfmnHLzeWgU08eUJMMPqgX864Asq1A4sIdAiB4b4mQXJfn46tN9aiZ7aJWY_QNXn6b6HNPLOLzn1ITwg==&ratebypass=yes",
      "vcodec": "none",
      "format_note": "tiny",
      "abr": 128,
      "player_url": "/s/player/0374edcb/player_ias.vflset/en_US/base.js",
      "downloader_options": {
        "http_chunk_size": 10485760
      },
      "width": null,
      "ext": "m4a",
      "filesize": 2546853,
      "fps": null,
      "protocol": "https",
      "format_id": "140",
      "height": null,
      "http_headers": {
        "Accept-Charset": "ISO-8859-1,utf-8;q=0.7,*;q=0.7",
        "Accept-Language": "en-us,en;q=0.5",
        "Accept-Encoding": "gzip, deflate",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3724.1 Safari/537.36"
      },
      "acodec": "mp4a.40.2"
    },
    {
      "asr": null,
      "tbr": 80.176,
      "protocol": "https",
      "format": "394 - 256x144 (144p)",
      "url": "https://r5---sn-hgn7yn7s.googlevideo.com/videoplayback?expire=1588284558&ei=LviqXtfDCpS21wa7qJww&ip=2a01%3Acb14%3A82d5%3A3100%3A3d11%3A46bf%3A19ff%3Abfee&id=o-AHMywiauRuVcRIWJoUPcIehrPDl9lxBtozIzDrvX1_X7&itag=394&aitags=133%2C134%2C135%2C136%2C160%2C242%2C243%2C244%2C247%2C278%2C394%2C395%2C396%2C397%2C398&source=youtube&requiressl=yes&mh=M3&mm=31%2C29&mn=sn-hgn7yn7s%2Csn-hgn7rnee&ms=au%2Crdu&mv=m&mvi=4&pl=30&gcr=fr&initcwndbps=685000&vprv=1&mime=video%2Fmp4&gir=yes&clen=1410701&dur=160.240&lmt=1587328969280929&mt=1588262854&fvip=5&keepalive=yes&c=WEB&txp=5531432&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cgcr%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=ALrAebAwRQIgbK5vyeYZSV4F73SEJzPqKndSJsnmoEwmvkPAcDh29UcCIQDLFQtxIXSQN90NSy2R6WgFiev-cw7t93EjZI8GORACZg%3D%3D&sig=AJpPlLswRQIhAJFt-WvQQjIEsv6SypwSDhiPyquBaiNgtekwTD_fIq_hAiBjqbMRTzQKNqXCNFCABsCuNinLInk4ap_270Yc7apUIA==&ratebypass=yes",
      "vcodec": "av01.0.00M.08",
      "format_note": "144p",
      "player_url": "/s/player/0374edcb/player_ias.vflset/en_US/base.js",
      "downloader_options": {
        "http_chunk_size": 10485760
      },
      "width": 256,
      "ext": "mp4",
      "filesize": 1410701,
      "fps": 25,
      "format_id": "394",
      "height": 144,
      "http_headers": {
        "Accept-Charset": "ISO-8859-1,utf-8;q=0.7,*;q=0.7",
        "Accept-Language": "en-us,en;q=0.5",
        "Accept-Encoding": "gzip, deflate",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3724.1 Safari/537.36"
      },
      "acodec": "none"
    },
    {
      "asr": null,
      "tbr": 98.964,
      "container": "webm",
      "format": "278 - 256x144 (144p)",
      "url": "https://r5---sn-hgn7yn7s.googlevideo.com/videoplayback?expire=1588284558&ei=LviqXtfDCpS21wa7qJww&ip=2a01%3Acb14%3A82d5%3A3100%3A3d11%3A46bf%3A19ff%3Abfee&id=o-AHMywiauRuVcRIWJoUPcIehrPDl9lxBtozIzDrvX1_X7&itag=278&aitags=133%2C134%2C135%2C136%2C160%2C242%2C243%2C244%2C247%2C278%2C394%2C395%2C396%2C397%2C398&source=youtube&requiressl=yes&mh=M3&mm=31%2C29&mn=sn-hgn7yn7s%2Csn-hgn7rnee&ms=au%2Crdu&mv=m&mvi=4&pl=30&gcr=fr&initcwndbps=685000&vprv=1&mime=video%2Fwebm&gir=yes&clen=1797617&dur=160.240&lmt=1540704416881501&mt=1588262854&fvip=5&keepalive=yes&c=WEB&txp=5533432&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cgcr%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=ALrAebAwRQIgbK5vyeYZSV4F73SEJzPqKndSJsnmoEwmvkPAcDh29UcCIQDLFQtxIXSQN90NSy2R6WgFiev-cw7t93EjZI8GORACZg%3D%3D&sig=AJpPlLswRAIgfZDlKe6XSNJuoEB_zqpRhkNZdL-pPvxx3lkztbKmKGUCIAe4GFuztmbz6gZXDJ8HquMPGOx2bFmCu1gYT2h43QGW&ratebypass=yes",
      "vcodec": "vp9",
      "format_note": "144p",
      "player_url": "/s/player/0374edcb/player_ias.vflset/en_US/base.js",
      "downloader_options": {
        "http_chunk_size": 10485760
      },
      "width": 256,
      "ext": "webm",
      "filesize": 1797617,
      "fps": 25,
      "protocol": "https",
      "format_id": "278",
      "height": 144,
      "http_headers": {
        "Accept-Charset": "ISO-8859-1,utf-8;q=0.7,*;q=0.7",
        "Accept-Language": "en-us,en;q=0.5",
        "Accept-Encoding": "gzip, deflate",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3724.1 Safari/537.36"
      },
      "acodec": "none"
    },
    {
      "asr": null,
      "tbr": 111.381,
      "protocol": "https",
      "format": "160 - 256x144 (144p)",
      "url": "https://r5---sn-hgn7yn7s.googlevideo.com/videoplayback?expire=1588284558&ei=LviqXtfDCpS21wa7qJww&ip=2a01%3Acb14%3A82d5%3A3100%3A3d11%3A46bf%3A19ff%3Abfee&id=o-AHMywiauRuVcRIWJoUPcIehrPDl9lxBtozIzDrvX1_X7&itag=160&aitags=133%2C134%2C135%2C136%2C160%2C242%2C243%2C244%2C247%2C278%2C394%2C395%2C396%2C397%2C398&source=youtube&requiressl=yes&mh=M3&mm=31%2C29&mn=sn-hgn7yn7s%2Csn-hgn7rnee&ms=au%2Crdu&mv=m&mvi=4&pl=30&gcr=fr&initcwndbps=685000&vprv=1&mime=video%2Fmp4&gir=yes&clen=1814733&dur=160.240&lmt=1540704665082838&mt=1588262854&fvip=5&keepalive=yes&c=WEB&txp=5533432&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cgcr%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=ALrAebAwRQIgbK5vyeYZSV4F73SEJzPqKndSJsnmoEwmvkPAcDh29UcCIQDLFQtxIXSQN90NSy2R6WgFiev-cw7t93EjZI8GORACZg%3D%3D&sig=AJpPlLswRAIgWA9AwXj3SLfvb1sdF7XzvbFoZ8rzQdq0_tfepoUjuOUCIGxB4taZDyZdz3vuSDw7g0sffNWHXUUa0jGm_Vor0MeE&ratebypass=yes",
      "vcodec": "avc1.4d400c",
      "format_note": "144p",
      "height": 144,
      "downloader_options": {
        "http_chunk_size": 10485760
      },
      "width": 256,
      "ext": "mp4",
      "filesize": 1814733,
      "fps": 25,
      "format_id": "160",
      "player_url": "/s/player/0374edcb/player_ias.vflset/en_US/base.js",
      "http_headers": {
        "Accept-Charset": "ISO-8859-1,utf-8;q=0.7,*;q=0.7",
        "Accept-Language": "en-us,en;q=0.5",
        "Accept-Encoding": "gzip, deflate",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3724.1 Safari/537.36"
      },
      "acodec": "none"
    },
    {
      "asr": null,
      "tbr": 176.554,
      "protocol": "https",
      "format": "395 - 426x240 (240p)",
      "url": "https://r5---sn-hgn7yn7s.googlevideo.com/videoplayback?expire=1588284558&ei=LviqXtfDCpS21wa7qJww&ip=2a01%3Acb14%3A82d5%3A3100%3A3d11%3A46bf%3A19ff%3Abfee&id=o-AHMywiauRuVcRIWJoUPcIehrPDl9lxBtozIzDrvX1_X7&itag=395&aitags=133%2C134%2C135%2C136%2C160%2C242%2C243%2C244%2C247%2C278%2C394%2C395%2C396%2C397%2C398&source=youtube&requiressl=yes&mh=M3&mm=31%2C29&mn=sn-hgn7yn7s%2Csn-hgn7rnee&ms=au%2Crdu&mv=m&mvi=4&pl=30&gcr=fr&initcwndbps=685000&vprv=1&mime=video%2Fmp4&gir=yes&clen=2909851&dur=160.240&lmt=1587329342948193&mt=1588262854&fvip=5&keepalive=yes&c=WEB&txp=5531432&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cgcr%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=ALrAebAwRQIgbK5vyeYZSV4F73SEJzPqKndSJsnmoEwmvkPAcDh29UcCIQDLFQtxIXSQN90NSy2R6WgFiev-cw7t93EjZI8GORACZg%3D%3D&sig=AJpPlLswRgIhAP3NsFAg-_exjC6USirEJvsteyj1u0z95zuPVP9eoD17AiEA9uG4gYRFl4opqslzO2bcfDDZB0zyKVZ9NmgxVfCHxdY=&ratebypass=yes",
      "vcodec": "av01.0.00M.08",
      "format_note": "240p",
      "player_url": "/s/player/0374edcb/player_ias.vflset/en_US/base.js",
      "downloader_options": {
        "http_chunk_size": 10485760
      },
      "width": 426,
      "ext": "mp4",
      "filesize": 2909851,
      "fps": 25,
      "format_id": "395",
      "height": 240,
      "http_headers": {
        "Accept-Charset": "ISO-8859-1,utf-8;q=0.7,*;q=0.7",
        "Accept-Language": "en-us,en;q=0.5",
        "Accept-Encoding": "gzip, deflate",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3724.1 Safari/537.36"
      },
      "acodec": "none"
    },
    {
      "asr": null,
      "tbr": 224.564,
      "protocol": "https",
      "format": "242 - 426x240 (240p)",
      "url": "https://r5---sn-hgn7yn7s.googlevideo.com/videoplayback?expire=1588284558&ei=LviqXtfDCpS21wa7qJww&ip=2a01%3Acb14%3A82d5%3A3100%3A3d11%3A46bf%3A19ff%3Abfee&id=o-AHMywiauRuVcRIWJoUPcIehrPDl9lxBtozIzDrvX1_X7&itag=242&aitags=133%2C134%2C135%2C136%2C160%2C242%2C243%2C244%2C247%2C278%2C394%2C395%2C396%2C397%2C398&source=youtube&requiressl=yes&mh=M3&mm=31%2C29&mn=sn-hgn7yn7s%2Csn-hgn7rnee&ms=au%2Crdu&mv=m&mvi=4&pl=30&gcr=fr&initcwndbps=685000&vprv=1&mime=video%2Fwebm&gir=yes&clen=3474236&dur=160.240&lmt=1540704300207778&mt=1588262854&fvip=5&keepalive=yes&c=WEB&txp=5533432&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cgcr%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=ALrAebAwRQIgbK5vyeYZSV4F73SEJzPqKndSJsnmoEwmvkPAcDh29UcCIQDLFQtxIXSQN90NSy2R6WgFiev-cw7t93EjZI8GORACZg%3D%3D&sig=AJpPlLswRQIgam82G8_Vjo_sMe8cD4Qr4TEKxVtqbZ2ZarRjT8gb5oMCIQCqH-KeoqunfzykaGIDUKabuYhNxxTQI7_i8eXawn5yGQ==&ratebypass=yes",
      "vcodec": "vp9",
      "format_note": "240p",
      "height": 240,
      "downloader_options": {
        "http_chunk_size": 10485760
      },
      "width": 426,
      "ext": "webm",
      "filesize": 3474236,
      "fps": 25,
      "format_id": "242",
      "player_url": "/s/player/0374edcb/player_ias.vflset/en_US/base.js",
      "http_headers": {
        "Accept-Charset": "ISO-8859-1,utf-8;q=0.7,*;q=0.7",
        "Accept-Language": "en-us,en;q=0.5",
        "Accept-Encoding": "gzip, deflate",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3724.1 Safari/537.36"
      },
      "acodec": "none"
    },
    {
      "asr": null,
      "tbr": 320.442,
      "protocol": "https",
      "format": "396 - 640x360 (360p)",
      "url": "https://r5---sn-hgn7yn7s.googlevideo.com/videoplayback?expire=1588284558&ei=LviqXtfDCpS21wa7qJww&ip=2a01%3Acb14%3A82d5%3A3100%3A3d11%3A46bf%3A19ff%3Abfee&id=o-AHMywiauRuVcRIWJoUPcIehrPDl9lxBtozIzDrvX1_X7&itag=396&aitags=133%2C134%2C135%2C136%2C160%2C242%2C243%2C244%2C247%2C278%2C394%2C395%2C396%2C397%2C398&source=youtube&requiressl=yes&mh=M3&mm=31%2C29&mn=sn-hgn7yn7s%2Csn-hgn7rnee&ms=au%2Crdu&mv=m&mvi=4&pl=30&gcr=fr&initcwndbps=685000&vprv=1&mime=video%2Fmp4&gir=yes&clen=5099260&dur=160.240&lmt=1587329583707830&mt=1588262854&fvip=5&keepalive=yes&c=WEB&txp=5531432&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cgcr%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=ALrAebAwRQIgbK5vyeYZSV4F73SEJzPqKndSJsnmoEwmvkPAcDh29UcCIQDLFQtxIXSQN90NSy2R6WgFiev-cw7t93EjZI8GORACZg%3D%3D&sig=AJpPlLswRAIgPp408E_8fLH4hQDaLGlgaap6PefcP9O_DE3qrNRwtrYCIEEzQHGLBJzmzrlAOZoYUl2y7g608irFFnPGLLH2-hZo&ratebypass=yes",
      "vcodec": "av01.0.01M.08",
      "format_note": "360p",
      "player_url": "/s/player/0374edcb/player_ias.vflset/en_US/base.js",
      "downloader_options": {
        "http_chunk_size": 10485760
      },
      "width": 640,
      "ext": "mp4",
      "filesize": 5099260,
      "fps": 25,
      "format_id": "396",
      "height": 360,
      "http_headers": {
        "Accept-Charset": "ISO-8859-1,utf-8;q=0.7,*;q=0.7",
        "Accept-Language": "en-us,en;q=0.5",
        "Accept-Encoding": "gzip, deflate",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3724.1 Safari/537.36"
      },
      "acodec": "none"
    },
    {
      "asr": null,
      "tbr": 373.12,
      "protocol": "https",
      "format": "133 - 426x240 (240p)",
      "url": "https://r5---sn-hgn7yn7s.googlevideo.com/videoplayback?expire=1588284558&ei=LviqXtfDCpS21wa7qJww&ip=2a01%3Acb14%3A82d5%3A3100%3A3d11%3A46bf%3A19ff%3Abfee&id=o-AHMywiauRuVcRIWJoUPcIehrPDl9lxBtozIzDrvX1_X7&itag=133&aitags=133%2C134%2C135%2C136%2C160%2C242%2C243%2C244%2C247%2C278%2C394%2C395%2C396%2C397%2C398&source=youtube&requiressl=yes&mh=M3&mm=31%2C29&mn=sn-hgn7yn7s%2Csn-hgn7rnee&ms=au%2Crdu&mv=m&mvi=4&pl=30&gcr=fr&initcwndbps=685000&vprv=1&mime=video%2Fmp4&gir=yes&clen=4136317&dur=160.240&lmt=1540704484944077&mt=1588262854&fvip=5&keepalive=yes&c=WEB&txp=5533432&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cgcr%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=ALrAebAwRQIgbK5vyeYZSV4F73SEJzPqKndSJsnmoEwmvkPAcDh29UcCIQDLFQtxIXSQN90NSy2R6WgFiev-cw7t93EjZI8GORACZg%3D%3D&sig=AJpPlLswRQIhAKUudmyB0Ep4wJm5gbwoM4vKGp8oeVA7WQqYhUYv7Nq-AiBMv1ccuxxNzwTfM-lw0_Io5l_mZ6DRV-S4B3zDRUtQkg==&ratebypass=yes",
      "vcodec": "avc1.4d4015",
      "format_note": "240p",
      "height": 240,
      "downloader_options": {
        "http_chunk_size": 10485760
      },
      "width": 426,
      "ext": "mp4",
      "filesize": 4136317,
      "fps": 25,
      "format_id": "133",
      "player_url": "/s/player/0374edcb/player_ias.vflset/en_US/base.js",
      "http_headers": {
        "Accept-Charset": "ISO-8859-1,utf-8;q=0.7,*;q=0.7",
        "Accept-Language": "en-us,en;q=0.5",
        "Accept-Encoding": "gzip, deflate",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3724.1 Safari/537.36"
      },
      "acodec": "none"
    },
    {
      "asr": null,
      "tbr": 406.817,
      "protocol": "https",
      "format": "243 - 640x360 (360p)",
      "url": "https://r5---sn-hgn7yn7s.googlevideo.com/videoplayback?expire=1588284558&ei=LviqXtfDCpS21wa7qJww&ip=2a01%3Acb14%3A82d5%3A3100%3A3d11%3A46bf%3A19ff%3Abfee&id=o-AHMywiauRuVcRIWJoUPcIehrPDl9lxBtozIzDrvX1_X7&itag=243&aitags=133%2C134%2C135%2C136%2C160%2C242%2C243%2C244%2C247%2C278%2C394%2C395%2C396%2C397%2C398&source=youtube&requiressl=yes&mh=M3&mm=31%2C29&mn=sn-hgn7yn7s%2Csn-hgn7rnee&ms=au%2Crdu&mv=m&mvi=4&pl=30&gcr=fr&initcwndbps=685000&vprv=1&mime=video%2Fwebm&gir=yes&clen=6330622&dur=160.240&lmt=1540705084627704&mt=1588262854&fvip=5&keepalive=yes&c=WEB&txp=5533432&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cgcr%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=ALrAebAwRQIgbK5vyeYZSV4F73SEJzPqKndSJsnmoEwmvkPAcDh29UcCIQDLFQtxIXSQN90NSy2R6WgFiev-cw7t93EjZI8GORACZg%3D%3D&sig=AJpPlLswRAIgUdc4IoJaHTAzbm5onnir79WSd6KkxWNT9sZRBomILKYCIC_O_2yBeODZ1Rj0y0yyyIRMmYbvrg7drDNdl4g42O4G&ratebypass=yes",
      "vcodec": "vp9",
      "format_note": "360p",
      "height": 360,
      "downloader_options": {
        "http_chunk_size": 10485760
      },
      "width": 640,
      "ext": "webm",
      "filesize": 6330622,
      "fps": 25,
      "format_id": "243",
      "player_url": "/s/player/0374edcb/player_ias.vflset/en_US/base.js",
      "http_headers": {
        "Accept-Charset": "ISO-8859-1,utf-8;q=0.7,*;q=0.7",
        "Accept-Language": "en-us,en;q=0.5",
        "Accept-Encoding": "gzip, deflate",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3724.1 Safari/537.36"
      },
      "acodec": "none"
    },
    {
      "asr": null,
      "tbr": 552.654,
      "protocol": "https",
      "format": "397 - 854x480 (480p)",
      "url": "https://r5---sn-hgn7yn7s.googlevideo.com/videoplayback?expire=1588284558&ei=LviqXtfDCpS21wa7qJww&ip=2a01%3Acb14%3A82d5%3A3100%3A3d11%3A46bf%3A19ff%3Abfee&id=o-AHMywiauRuVcRIWJoUPcIehrPDl9lxBtozIzDrvX1_X7&itag=397&aitags=133%2C134%2C135%2C136%2C160%2C242%2C243%2C244%2C247%2C278%2C394%2C395%2C396%2C397%2C398&source=youtube&requiressl=yes&mh=M3&mm=31%2C29&mn=sn-hgn7yn7s%2Csn-hgn7rnee&ms=au%2Crdu&mv=m&mvi=4&pl=30&gcr=fr&initcwndbps=685000&vprv=1&mime=video%2Fmp4&gir=yes&clen=8541532&dur=160.240&lmt=1587330141576266&mt=1588262854&fvip=5&keepalive=yes&c=WEB&txp=5531432&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cgcr%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=ALrAebAwRQIgbK5vyeYZSV4F73SEJzPqKndSJsnmoEwmvkPAcDh29UcCIQDLFQtxIXSQN90NSy2R6WgFiev-cw7t93EjZI8GORACZg%3D%3D&sig=AJpPlLswRQIhAMoYxDjHsFNEhWuofGxOX_nsl2IrTc1Rq9JBoK33maJgAiB4mPQTGyZmFrA2yyGpOsJ8OjdzCsE7NAcGakX_lpoAbA==&ratebypass=yes",
      "vcodec": "av01.0.04M.08",
      "format_note": "480p",
      "player_url": "/s/player/0374edcb/player_ias.vflset/en_US/base.js",
      "downloader_options": {
        "http_chunk_size": 10485760
      },
      "width": 854,
      "ext": "mp4",
      "filesize": 8541532,
      "fps": 25,
      "format_id": "397",
      "height": 480,
      "http_headers": {
        "Accept-Charset": "ISO-8859-1,utf-8;q=0.7,*;q=0.7",
        "Accept-Language": "en-us,en;q=0.5",
        "Accept-Encoding": "gzip, deflate",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3724.1 Safari/537.36"
      },
      "acodec": "none"
    },
    {
      "asr": null,
      "tbr": 678.451,
      "protocol": "https",
      "format": "134 - 640x360 (360p)",
      "url": "https://r5---sn-hgn7yn7s.googlevideo.com/videoplayback?expire=1588284558&ei=LviqXtfDCpS21wa7qJww&ip=2a01%3Acb14%3A82d5%3A3100%3A3d11%3A46bf%3A19ff%3Abfee&id=o-AHMywiauRuVcRIWJoUPcIehrPDl9lxBtozIzDrvX1_X7&itag=134&aitags=133%2C134%2C135%2C136%2C160%2C242%2C243%2C244%2C247%2C278%2C394%2C395%2C396%2C397%2C398&source=youtube&requiressl=yes&mh=M3&mm=31%2C29&mn=sn-hgn7yn7s%2Csn-hgn7rnee&ms=au%2Crdu&mv=m&mvi=4&pl=30&gcr=fr&initcwndbps=685000&vprv=1&mime=video%2Fmp4&gir=yes&clen=7434959&dur=160.240&lmt=1540703832565693&mt=1588262854&fvip=5&keepalive=yes&c=WEB&txp=5533432&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cgcr%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=ALrAebAwRQIgbK5vyeYZSV4F73SEJzPqKndSJsnmoEwmvkPAcDh29UcCIQDLFQtxIXSQN90NSy2R6WgFiev-cw7t93EjZI8GORACZg%3D%3D&sig=AJpPlLswRQIhAK4tDbApOJ5p1n31PLZI9zA3jBIVR2dSaNbESFG6_E3MAiBmrhDmZKMch5JXSEGy6eY_3i4myTTz_dKO7xwjHfoPBA==&ratebypass=yes",
      "vcodec": "avc1.4d401e",
      "format_note": "360p",
      "height": 360,
      "downloader_options": {
        "http_chunk_size": 10485760
      },
      "width": 640,
      "ext": "mp4",
      "filesize": 7434959,
      "fps": 25,
      "format_id": "134",
      "player_url": "/s/player/0374edcb/player_ias.vflset/en_US/base.js",
      "http_headers": {
        "Accept-Charset": "ISO-8859-1,utf-8;q=0.7,*;q=0.7",
        "Accept-Language": "en-us,en;q=0.5",
        "Accept-Encoding": "gzip, deflate",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3724.1 Safari/537.36"
      },
      "acodec": "none"
    },
    {
      "asr": null,
      "tbr": 754.138,
      "protocol": "https",
      "format": "244 - 854x480 (480p)",
      "url": "https://r5---sn-hgn7yn7s.googlevideo.com/videoplayback?expire=1588284558&ei=LviqXtfDCpS21wa7qJww&ip=2a01%3Acb14%3A82d5%3A3100%3A3d11%3A46bf%3A19ff%3Abfee&id=o-AHMywiauRuVcRIWJoUPcIehrPDl9lxBtozIzDrvX1_X7&itag=244&aitags=133%2C134%2C135%2C136%2C160%2C242%2C243%2C244%2C247%2C278%2C394%2C395%2C396%2C397%2C398&source=youtube&requiressl=yes&mh=M3&mm=31%2C29&mn=sn-hgn7yn7s%2Csn-hgn7rnee&ms=au%2Crdu&mv=m&mvi=4&pl=30&gcr=fr&initcwndbps=685000&vprv=1&mime=video%2Fwebm&gir=yes&clen=10437609&dur=160.240&lmt=1540704339546750&mt=1588262854&fvip=5&keepalive=yes&c=WEB&txp=5533432&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cgcr%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=ALrAebAwRQIgbK5vyeYZSV4F73SEJzPqKndSJsnmoEwmvkPAcDh29UcCIQDLFQtxIXSQN90NSy2R6WgFiev-cw7t93EjZI8GORACZg%3D%3D&sig=AJpPlLswRQIgb4U1DcpiOc1VDCTKxPlyUNCG8agIjgUmIivqCo_petMCIQDm9bSl9H9A2l3wGFc75K2l1W00Ay3uDuzzOOp3Fldd7w==&ratebypass=yes",
      "vcodec": "vp9",
      "format_note": "480p",
      "height": 480,
      "downloader_options": {
        "http_chunk_size": 10485760
      },
      "width": 854,
      "ext": "webm",
      "filesize": 10437609,
      "fps": 25,
      "format_id": "244",
      "player_url": "/s/player/0374edcb/player_ias.vflset/en_US/base.js",
      "http_headers": {
        "Accept-Charset": "ISO-8859-1,utf-8;q=0.7,*;q=0.7",
        "Accept-Language": "en-us,en;q=0.5",
        "Accept-Encoding": "gzip, deflate",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3724.1 Safari/537.36"
      },
      "acodec": "none"
    },
    {
      "asr": null,
      "tbr": 1040.244,
      "protocol": "https",
      "format": "398 - 1280x720 (720p)",
      "url": "https://r5---sn-hgn7yn7s.googlevideo.com/videoplayback?expire=1588284558&ei=LviqXtfDCpS21wa7qJww&ip=2a01%3Acb14%3A82d5%3A3100%3A3d11%3A46bf%3A19ff%3Abfee&id=o-AHMywiauRuVcRIWJoUPcIehrPDl9lxBtozIzDrvX1_X7&itag=398&aitags=133%2C134%2C135%2C136%2C160%2C242%2C243%2C244%2C247%2C278%2C394%2C395%2C396%2C397%2C398&source=youtube&requiressl=yes&mh=M3&mm=31%2C29&mn=sn-hgn7yn7s%2Csn-hgn7rnee&ms=au%2Crdu&mv=m&mvi=4&pl=30&gcr=fr&initcwndbps=685000&vprv=1&mime=video%2Fmp4&gir=yes&clen=16373728&dur=160.240&lmt=1587329914918176&mt=1588262854&fvip=5&keepalive=yes&c=WEB&txp=5531432&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cgcr%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=ALrAebAwRQIgbK5vyeYZSV4F73SEJzPqKndSJsnmoEwmvkPAcDh29UcCIQDLFQtxIXSQN90NSy2R6WgFiev-cw7t93EjZI8GORACZg%3D%3D&sig=AJpPlLswRQIhAPNBOr0upLEDnCoYqxP9QavOduDMFBVI_YePyKTUtayXAiBUqaCNwNQNkeBDVGRCuu7BGzFD4C1Pd2gBujemw-nNbg==&ratebypass=yes",
      "vcodec": "av01.0.05M.08",
      "format_note": "720p",
      "player_url": "/s/player/0374edcb/player_ias.vflset/en_US/base.js",
      "downloader_options": {
        "http_chunk_size": 10485760
      },
      "width": 1280,
      "ext": "mp4",
      "filesize": 16373728,
      "fps": 25,
      "format_id": "398",
      "height": 720,
      "http_headers": {
        "Accept-Charset": "ISO-8859-1,utf-8;q=0.7,*;q=0.7",
        "Accept-Language": "en-us,en;q=0.5",
        "Accept-Encoding": "gzip, deflate",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3724.1 Safari/537.36"
      },
      "acodec": "none"
    },
    {
      "asr": null,
      "tbr": 1101.686,
      "protocol": "https",
      "format": "135 - 854x480 (480p)",
      "url": "https://r5---sn-hgn7yn7s.googlevideo.com/videoplayback?expire=1588284558&ei=LviqXtfDCpS21wa7qJww&ip=2a01%3Acb14%3A82d5%3A3100%3A3d11%3A46bf%3A19ff%3Abfee&id=o-AHMywiauRuVcRIWJoUPcIehrPDl9lxBtozIzDrvX1_X7&itag=135&aitags=133%2C134%2C135%2C136%2C160%2C242%2C243%2C244%2C247%2C278%2C394%2C395%2C396%2C397%2C398&source=youtube&requiressl=yes&mh=M3&mm=31%2C29&mn=sn-hgn7yn7s%2Csn-hgn7rnee&ms=au%2Crdu&mv=m&mvi=4&pl=30&gcr=fr&initcwndbps=685000&vprv=1&mime=video%2Fmp4&gir=yes&clen=11777202&dur=160.240&lmt=1540703843211840&mt=1588262854&fvip=5&keepalive=yes&c=WEB&txp=5533432&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cgcr%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=ALrAebAwRQIgbK5vyeYZSV4F73SEJzPqKndSJsnmoEwmvkPAcDh29UcCIQDLFQtxIXSQN90NSy2R6WgFiev-cw7t93EjZI8GORACZg%3D%3D&sig=AJpPlLswRAIgc8jlWed-dBbcioPCk3m42v6vskONwZ0TGQGOJvxPoDUCIGI7bgRwovGOsfAHL_4HE91zZQQo2QoMhnM-qtdcdOxc&ratebypass=yes",
      "vcodec": "avc1.4d401e",
      "format_note": "480p",
      "height": 480,
      "downloader_options": {
        "http_chunk_size": 10485760
      },
      "width": 854,
      "ext": "mp4",
      "filesize": 11777202,
      "fps": 25,
      "format_id": "135",
      "player_url": "/s/player/0374edcb/player_ias.vflset/en_US/base.js",
      "http_headers": {
        "Accept-Charset": "ISO-8859-1,utf-8;q=0.7,*;q=0.7",
        "Accept-Language": "en-us,en;q=0.5",
        "Accept-Encoding": "gzip, deflate",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3724.1 Safari/537.36"
      },
      "acodec": "none"
    },
    {
      "asr": null,
      "tbr": 1458.664,
      "protocol": "https",
      "format": "247 - 1280x720 (720p)",
      "url": "https://r5---sn-hgn7yn7s.googlevideo.com/videoplayback?expire=1588284558&ei=LviqXtfDCpS21wa7qJww&ip=2a01%3Acb14%3A82d5%3A3100%3A3d11%3A46bf%3A19ff%3Abfee&id=o-AHMywiauRuVcRIWJoUPcIehrPDl9lxBtozIzDrvX1_X7&itag=247&aitags=133%2C134%2C135%2C136%2C160%2C242%2C243%2C244%2C247%2C278%2C394%2C395%2C396%2C397%2C398&source=youtube&requiressl=yes&mh=M3&mm=31%2C29&mn=sn-hgn7yn7s%2Csn-hgn7rnee&ms=au%2Crdu&mv=m&mvi=4&pl=30&gcr=fr&initcwndbps=685000&vprv=1&mime=video%2Fwebm&gir=yes&clen=20038192&dur=160.240&lmt=1540704051746772&mt=1588262854&fvip=5&keepalive=yes&c=WEB&txp=5533432&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cgcr%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=ALrAebAwRQIgbK5vyeYZSV4F73SEJzPqKndSJsnmoEwmvkPAcDh29UcCIQDLFQtxIXSQN90NSy2R6WgFiev-cw7t93EjZI8GORACZg%3D%3D&sig=AJpPlLswRQIgZUaa58Nq_yAyHNyfWQ4UShMRhcgMk5QF278EybvC5JsCIQDvVKT9jeCQcndIxtK_pob9GgT8WmOOPhnGmDZFpCTrPA==&ratebypass=yes",
      "vcodec": "vp9",
      "format_note": "720p",
      "height": 720,
      "downloader_options": {
        "http_chunk_size": 10485760
      },
      "width": 1280,
      "ext": "webm",
      "filesize": 20038192,
      "fps": 25,
      "format_id": "247",
      "player_url": "/s/player/0374edcb/player_ias.vflset/en_US/base.js",
      "http_headers": {
        "Accept-Charset": "ISO-8859-1,utf-8;q=0.7,*;q=0.7",
        "Accept-Language": "en-us,en;q=0.5",
        "Accept-Encoding": "gzip, deflate",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3724.1 Safari/537.36"
      },
      "acodec": "none"
    },
    {
      "asr": null,
      "tbr": 1669.65,
      "protocol": "https",
      "format": "136 - 1280x720 (720p)",
      "url": "https://r5---sn-hgn7yn7s.googlevideo.com/videoplayback?expire=1588284558&ei=LviqXtfDCpS21wa7qJww&ip=2a01%3Acb14%3A82d5%3A3100%3A3d11%3A46bf%3A19ff%3Abfee&id=o-AHMywiauRuVcRIWJoUPcIehrPDl9lxBtozIzDrvX1_X7&itag=136&aitags=133%2C134%2C135%2C136%2C160%2C242%2C243%2C244%2C247%2C278%2C394%2C395%2C396%2C397%2C398&source=youtube&requiressl=yes&mh=M3&mm=31%2C29&mn=sn-hgn7yn7s%2Csn-hgn7rnee&ms=au%2Crdu&mv=m&mvi=4&pl=30&gcr=fr&initcwndbps=685000&vprv=1&mime=video%2Fmp4&gir=yes&clen=20672291&dur=160.240&lmt=1540703838191378&mt=1588262854&fvip=5&keepalive=yes&c=WEB&txp=5533432&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cgcr%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=ALrAebAwRQIgbK5vyeYZSV4F73SEJzPqKndSJsnmoEwmvkPAcDh29UcCIQDLFQtxIXSQN90NSy2R6WgFiev-cw7t93EjZI8GORACZg%3D%3D&sig=AJpPlLswRQIhAOMKVuAo1KHZIc45xehSX5BY3tVMw-nFTmSPBOk1bRjBAiBsbXoUoW_PFJPXVVGt9lhhnPr61g4TQpovvl1sOYRCjg==&ratebypass=yes",
      "vcodec": "avc1.4d401f",
      "format_note": "720p",
      "height": 720,
      "downloader_options": {
        "http_chunk_size": 10485760
      },
      "width": 1280,
      "ext": "mp4",
      "filesize": 20672291,
      "fps": 25,
      "format_id": "136",
      "player_url": "/s/player/0374edcb/player_ias.vflset/en_US/base.js",
      "http_headers": {
        "Accept-Charset": "ISO-8859-1,utf-8;q=0.7,*;q=0.7",
        "Accept-Language": "en-us,en;q=0.5",
        "Accept-Encoding": "gzip, deflate",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3724.1 Safari/537.36"
      },
      "acodec": "none"
    },
    {
      "asr": 44100,
      "tbr": 660.807,
      "protocol": "https",
      "format": "18 - 640x360 (360p)",
      "url": "https://r5---sn-hgn7yn7s.googlevideo.com/videoplayback?expire=1588284558&ei=LviqXtfDCpS21wa7qJww&ip=2a01%3Acb14%3A82d5%3A3100%3A3d11%3A46bf%3A19ff%3Abfee&id=o-AHMywiauRuVcRIWJoUPcIehrPDl9lxBtozIzDrvX1_X7&itag=18&source=youtube&requiressl=yes&mh=M3&mm=31%2C29&mn=sn-hgn7yn7s%2Csn-hgn7rnee&ms=au%2Crdu&mv=m&mvi=4&pl=30&gcr=fr&initcwndbps=685000&vprv=1&mime=video%2Fmp4&gir=yes&clen=13235970&ratebypass=yes&dur=160.310&lmt=1540702901145502&mt=1588262854&fvip=5&c=WEB&txp=5531432&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cgcr%2Cvprv%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=ALrAebAwRQIgbK5vyeYZSV4F73SEJzPqKndSJsnmoEwmvkPAcDh29UcCIQDLFQtxIXSQN90NSy2R6WgFiev-cw7t93EjZI8GORACZg%3D%3D&sig=AJpPlLswRgIhAM6ogb9mDh_noxhjKEiqPne4W280P_5I9n8rBsUJ2_GTAiEAlFXFOaZD9n506YBwOmWYsTY5O3UvniztElT_MOVNUHI=",
      "vcodec": "avc1.42001E",
      "format_note": "360p",
      "ext": "mp4",
      "player_url": "/s/player/0374edcb/player_ias.vflset/en_US/base.js",
      "width": 640,
      "abr": 96,
      "filesize": 13235970,
      "fps": null,
      "format_id": "18",
      "height": 360,
      "http_headers": {
        "Accept-Charset": "ISO-8859-1,utf-8;q=0.7,*;q=0.7",
        "Accept-Language": "en-us,en;q=0.5",
        "Accept-Encoding": "gzip, deflate",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3724.1 Safari/537.36"
      },
      "acodec": "mp4a.40.2"
    },
    {
      "asr": 44100,
      "tbr": 1158.693,
      "protocol": "https",
      "format": "22 - 1280x720 (720p)",
      "url": "https://r5---sn-hgn7yn7s.googlevideo.com/videoplayback?expire=1588284558&ei=LviqXtfDCpS21wa7qJww&ip=2a01%3Acb14%3A82d5%3A3100%3A3d11%3A46bf%3A19ff%3Abfee&id=o-AHMywiauRuVcRIWJoUPcIehrPDl9lxBtozIzDrvX1_X7&itag=22&source=youtube&requiressl=yes&mh=M3&mm=31%2C29&mn=sn-hgn7yn7s%2Csn-hgn7rnee&ms=au%2Crdu&mv=m&mvi=4&pl=30&gcr=fr&initcwndbps=685000&vprv=1&mime=video%2Fmp4&ratebypass=yes&dur=160.310&lmt=1540704871546840&mt=1588262854&fvip=5&c=WEB&txp=5531432&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cgcr%2Cvprv%2Cmime%2Cratebypass%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=ALrAebAwRQIgbK5vyeYZSV4F73SEJzPqKndSJsnmoEwmvkPAcDh29UcCIQDLFQtxIXSQN90NSy2R6WgFiev-cw7t93EjZI8GORACZg%3D%3D&sig=AJpPlLswRQIhAI4OmCCI5bhyJiwxd1mi_XMntzgyiyiom1wqldDc9QQSAiBV_8_eFce99fZTIn8m53b7J1ldn_TKV7zEQ0udPxNcbQ==",
      "vcodec": "avc1.64001F",
      "format_note": "720p",
      "ext": "mp4",
      "player_url": "/s/player/0374edcb/player_ias.vflset/en_US/base.js",
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
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3724.1 Safari/537.36"
      },
      "acodec": "mp4a.40.2"
    }
  ],
  "channel_url": "http://www.youtube.com/channel/UC6pGDc4bFGD1_36IKv3FnYg",
  "vcodec": "avc1.64001F",
  "age_limit": 0,
  "_duration_raw": 160,
  "_duration_hms": "00:02:40"
}
```
