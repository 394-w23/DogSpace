import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="wrapper">
      <div className="top-justified">
        <div className="header">
          <div className="top">
            <h2> DogSpace </h2>
          </div>
        </div>

        <section className="cards">
          <div>
            <img
              className="homepic"
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFBcVFRUYGBcZGh4eHBoaHCMgGh4dHh0cHSIgIB4aIiwjIR0pIBoaKTYlKS0vMzMzIyQ4PjgwPSwzMy8BCwsLDw4PHRISHTIiIikyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyPf/AABEIAKgBLAMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAEBQMGAAIHAQj/xAA9EAACAQIEBAMHAgQFBQADAAABAhEDIQAEEjEFQVFhInGBBhMykaGx8ELBI1LR4RRicoLxFTNDkqIHc8L/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAgEQACAgIDAQEBAQAAAAAAAAAAAQIRITEDEkFRE3Fh/9oADAMBAAIRAxEAPwCpV6rIi+5q/wAMt8AaHpkgGP8AMskgEXscC5XiOZUOq1LN1PTt8sWDJcNCLApBV1WqEEggfzRJj0wZV4FTqTUUAaSdZUaZ6kSLDtA2iBjKjVMSZjiGcIXVXkqSRcDluYF/nvOJcrmaullqVKhQTMMdmBWBbaCYBjDpOE0JGpKjAgXXSAu9oVhfuR6HC85CorOyB1BtLDxduUfMdcFME0G0PaeqqoNKnTKkkQroQBpJIjV/QE7Rg4cUzC04NP4SZcXlDMqwUkhtn7MGP6iMLqGWqHS1VSFB1SObLMDSJIm8tB5W54mzqVGZ9KUlY/zCH08zrXcA7Mdp74MjwOm4xUp00Z6J1LDB1Mho3uLqYJMHkWjsDmONUTSQOjrDS7KJhmvqtIjVMjeGPTCivlc9TQBgNG3vLNPS6xe8ScatxHMUjFSmjh1g6VALDvBKkjkYB74aYdRhRzZrs7UCCQ4YwCCy2kw0gNJExAkT+oYfZ7JhkNRRSKxLWBDWMsARYm1pIPeRCrhVGiVD+OlLAqXUiotQSQAQAvW1wRItiqcTruKj03doE6aewWTMR0g2nDvAuuSDilakS0APDCLkJAmYsCBvsY7HcIn0jcye1/Qc4wzocO1SzEkdOWEmczJWoY+FWECOQwtlNdcjjhKKp1vGo7A8hMHtPLGnGc7oZNJlQfnjbI00r02JEmT6CevywrzeRIJEm3I/3wYKt1gcZZkqgbK0bjY+eBszlSpuI+3oeeFGWqmm3bFkyWakb2t/fe2Exp2Iq0A4hqVDuD+f0xa/cUqhMosne0E7ncfnpiHNcApkeAFTHWR9cCYOLEeX4w6WMn98SVs/TcGVhuRi8/kYifIQ0Tg2jwlW3+318sO0TUjV8stRAw3jf89cbcMzZptofbkdutp63+gHPG2Q8DtTPmJ9fpc/PEucy6sQDsduo527i3r9UUNyQRIv18vQ2tHmT2xImYI+K45jqIA8jeY8owjyeZak4p1Lg/C177/W+GsSsjYx9SOnW/2thNFJmzUV1Fl5wbc5P0me9uWDsqn0/Yi/ScLVtvPrExY/fTf+mGXCqgup/P2jn6DAykC+0ap7sFxLNYdZ9MFcG4DVpU6baw6sFZkgh1kTa/ij7csLvaW1SiJs0p5FoHzg4tL5wzCATqZfkYxnObjQ4xTbOfVqamrUpsNLpUbSwF4kx9LxhtnZK0SGEqwJJ2Mqd74co1PMOVr01FQSoYfEI789p/5wn49RZJVwQBBBGzAbkd+3fFRmpEThSYZRz5I0sKdRIjU26nf4mFpm1+e9r5kMoEPiJEt+tSR6Ohe198V1AWhkDjvsfoRf169sF5bPIl5BM3LtY9RyJ8pOLOce5kGnLGl7wczTqBrdSVOpRf8AUF8sR5bIU83mdFFdCQkgmRMtZT8UQF5nlgjh+ayjf+KkT/KlLSR31Bd/InEtQ00IqU6Zpn9LqpAOmJVxqMEibkAm3YgpDyLf+hD3jOV/h0/e221Mk6UPmQMWmjwlUp+Gy1SR6BZ9LAEeWB8zxVXWq1MAVGpgMDsZiHgfGCYB5+IAjmd8nxH3jJTTb3YKE9YFiR5t8hgBWMcvl5OrVrVVFMdQCS7MfQm/bAmaWSCiSpUXjpb9sF0aoWnUZZ0EAqeggoQe86h6jHvDMoWpghpHc7c4+uJKKpmc4KTipr95MgINSov+2QY/DOCaHEpB93pUNO7QAIHcSZ5x88C/9Oq06bMVQ+ANZyWZJ0mF2lbSI6m/L3/EU6iNTZPdMWIGgBoEkbwBNlDBokTfrQiahx8UwVdPeaT4TIVo/UDyZbDeNsPKXEGqPKhIAGqm0qSkbSbWsV5WEYQ5ehTDpT0sGllDAg7bXNpI/STPnEnKeXXxkOwdHK6XJ2iV8pIIg2vzwZCkWupXSpalpZgA5pjexALRz3vH9sTZZPeMx1Rp0wYvEEKx56ogHkY73rPD+EVKwNT3gpNddUQNlsxHw7Rh0n8NCtUlaujQwJuejg7MG6g72nkHbFWQrL5e8FUIa3vKcDe8NYsL7zPUxj3/AArpqDElDsZ0mOh1NojpscKcvxLRUCtB6MXZWUmbErulp2tN+uPeK5mojTTd5J+EuCJEeLUBpKnrY9Rhp2OqM9oWehSL0UIAIOlgzaTuCNZaOxUx2xtxThacTylPNUCBWp09JWLyskqY5yTGwv3wizOaFVahqt42JWF8JB5MP0mD13x5knqU6arTLU6ghWdXjUL2geYM9sL9Yxwx/nOWhPVzPu6be8EaTpII8U9CP3xXM8oZCQQTuY5Hpi75zhYr3qyz2lr6jGxJk6vSMBn2aomB4ySLwx37apBxj+sDZ8U2sle9l60Fl6wf2wxzdMMT+cvngih7KaTqp1HkcmWZn/TtfzwDxKlVpHxqQs/ELr8x17xi1OMnhiUJRWUJ89QicbcMzHLmMb131DAOXOlicWZvY9SuQfzfyGGeXz4I+f7dPW34ESvPeP2x4jwd/wAA/wCPphUWnQ5r5VGbVy5x+x+eJkphbd/+duf7bYW0swfzyj5YIWvO3X+9/n+RhUOwbi+XIIqL+kgEdsZnn1Uwy7D+0eYud7fLBPvJkG46fI/k9zgRFFNmpm6NJTy2jzGGJhWapivlEf8AUpiRvPWehOA+EZ6D7t7MNj1j8++NeHZkUajUqn/bqWn1s18ecU4eZtEi6tyYdsMT+oflAD5c/mf3H4Jx5ljDk8rbeQ6biBE9vLC3gvFQ38OpZhA898GZpDTMzaLMPQftP/F1RSd5QdxGj73/AA/atTn1cL6b4PyhDeK/xv8AUk4TtmmWg7r8SQ47FCG+8404FxdSjkmDB0juxn6RGMuSLaKjJKRq+YK1S3+b7W/ti0ZhKdenpcSrDfmD1B5HFOoEM/itz9cW3JU392WAsL33gCfnyxn/AAtP6Uzi+RfKHw+NDYMxMieTAEAj+1sKQ1UnVz5RAAHQD9ox0H2hSaLtF1Wfl/xinuulitioAIBWVKsAR67j0xtCVow5IdXaIslmKpswJQ7kzp9eQw84fweoyk03XRF9JkjzUXI8pN9jhZ/iqlKoHpjSrfErXU+YP3GHGWyoJ9/l6nupEVKbBoBg3UaTae/XF0ZWM8pwxfdtUQhgg1MJuL+IrHLTeMG5bJN7wBTdU1GN5uQVjeVgzznFaTO1Kbsx8XhKmDJbxa538R0gCefczhxkeP8AvC4RTp0+AR4lEkkT5MLf5RhUh2xmmVqeITpW4cTzWQLeaT88NcpTXSZJB1NYG3xGOfMQfXAWX1inVep4qiKoqDoxACmP90+uCWyAckqVAECCL/CD++ALIs9TVyWVADDBhqFiZ1RN2NuU4io01p7f9xRCmSTJnexJ/IxXavGq1V2REhZHjG46G+/Xnzwbw4V1d6dRPeqqTrMhp5eIbmT3i+K7Ji6tBuVyFJtYU/xTPvFZhpaP8pgDzG3ywOFWnUY1KdnIDFPHbeZpsOg2NumCM9xT3bU1X3hIgvJCqkfy6rnnaMMMln6zA1KdUlZ/UoPoZMr8z9cFfA1sAbjdFXBp136N4bMBaGlbkdx1necb5jP0NIqCorLtIJDqO6E3NosTI67gTj2Rao2t6a6yDq0gI5jmTMGO49cVPKkMpSmZDEglhYz0P/OJk+uy4rtoMznEDVqN/hy+iQdbE/F1XmRbc974OyGTeJZmM3MncxY2EYlyeQVBp2O3SB15Ya0qQ0yCLcyfrb6Y5Z8rkdUOJIETh+kbDuLT8hA9cE5ekB853M/XYdhgl4CgEA6v29LYFzFfSpI5mI6dsZWa0Skajyged+8cvPEhytrC37+nPAOQzIJifMi8n9hhxEnYEeZ262xLGheMsNzt0k/O/wCbYHNOTYWNiDtHSMNzTJ+G/wCcoxDXowNVo5269RhoZUOJ8AptJRfdk8gJUny5emKfneH1KZOpZH8y3GOo5ilIJFj0B38vrhTnFEb7ixJHLl5XxvDllHeTGfGn/hzxMxGDErhsWM8CR7lRfpY/Ty54BHs0SzaNQURJsRtuOuNlywZi+OSA9cAfn4ce+9t6fKB/zhlnPZ8Ks+8PW43/AC30wKODvfSwPWRH5yxSnEXWQK+Zjzv+3564mzlQVKY6i47Hb5YjrcIYEBqi+Q5H+nfFh4Vw7LoP4hDEblj9hhS5EgUWyqe994sNZl+sYJyOflfdVLibEfEp6jt1HPD/ADtTLX00lI6gQD0vy3xpmculNKCooWpUBZo30m6kneY6/TCXIn4HRoS5jhFV9qZkbNsD0u0YfcP4fWNMrXZY5RJbpfl64VjPMjQrXHPrh7w/iHvAdX9p/IwpTl4OMVY14VwWgVKuHbVIJJjf/Tsb88Rt/wDjal/469QKf0krPodP7Y3pZkqQJDExfnA5YfcKqMb3+/0GI7tFOCYBwv2Lp0TqLGoeXvADH5bFpymVAAFvkI2jG2RrlqgU7EHlsQJ+WDlQqSIxSIeCvcV4GjI6gFZBHbY/IXxyPimXq00pNcGnNN+zKxj+xx9CqgYQb4rPH/ZSnVp1FUfGLjvyZe+1sUlTwJytUzjWXrsUh2KidzF/PnhnSqFApLN4bBlE2PKVMx2KkYjNMprp1VKFTp5iCOk7qe88se0xUFOTTVyvwtK+JeaNB36HfzxZmGTTcMSDpWGEKA0tO8biVue+2IuG5nRpkeGR8IIsCJHmd57HBdWuqGkArJqDB1YQwAB5ETMMI8ufNjw5KWlUdidTHtoaDB7i5Uja4wUJM2yWdaoKukwCCDc+IAT9SMN6/EazMXSmSGgyNiYAn6YTZVaaKfDcGRH8rkmD5AKPnh+tBIj4gJ0xtpkkfQz64FYMAzFGDpbWiKkkaZKOiwBYXBGnlcE4ePmdCFy2vSZ1KJIEG5G4uZnnAwkX3lIts6OVK6jHiiwAUt0EzuQL43zZZmPutiFAH6QbFviPnGKtImmxlxVS9NEprT95YuzDqASO3T064R1+HZjKotSnVFMsRqCNqUneHDyIjYkW64tHCcpCAVGU8jFx5d8A8WpLS1kNNPQbFfAey81aYIj64MDViD2g9qBWpilTgllIZSvipk2MMIEHtywHkMkaYFgJsI37/bGcM4UCpc+JmMk99/7fLDunk20g2I8oMbY5eSfZnZxQ6o9Wh4NREk7dPp+Wx6imYi0jkYnnuME5ZVgdOnX54kFMAg9+fXGDRuaPSABPM72/rhNn0YKVgt4T9fzlh3UJAPit5W9PlhPxUgrNgCeW1uf5bCWxMB4W4jp6c/nfDrLvDHVy+v0woyotsvW4v6YY5N4EQY+s/PAwiNqLGb+Y8sEugYX59Tt9cBUGA3Njvv8AtfBSONvv+RhobFNWlbuNwemFWcTxgj4dxfbrHUXxYM1Tkn5W/cHCypR2ix5+fy88aUJmmVoG0GY5CwPcRsfSMS0aiQQzQATbnPUadvn8rjE+WDEDSLDlMecg3nHmby9y0X+UfnXB1yJvArzdElPeNpJ1eEXFhsPPzOEteuumQ2lhYpc3AiR2sJGLC2cDAwPCLbz+AnFdosmqqSBBMAc8UZtED5N9OuYkj0xNTywABIubz9flh3kMqHtqBHTTt6/0wRmcjptG1u3piXITVFZp5X3tVKeykgt2UXb6fcY8z+a95XaodtVuygQB2tg7IKf4zCJgqOsbsN/9GFddAB+fvjR4wRG2rFdZPER+RhjkMyANIFh9cBVVg+Y59MZRG2CwWCz8PzEG+30t+Ti1cKzMkn9P3OKbwTh7OS0eAbkmF9Di2U8s4UaFLW+EEKOfPfCq9Fp4yOKvEVR0YG4vH2sMP8pnkqrqB9RitZbhDOB7x1pjmlG7Hs1Q8r8sWCgFpqERYUCAOYEfbGkYy9Mpyj4GCpHOe+3P74395JHngA1PnjcPsOeBuhVZQP8A8oZE03TN0xYnRUFtz8DXBjcg+YxTcrnDJFQA02EOpIO48gZ7jHXfbPKipk6im+qm0ecSD5zijezOSpmmA6+8UqJR4INrgAiAfUYtOzOSoTZTJj9FTUieJVLXC3PhPJbcvWDbErUwzteBpYr18EGekk1BgXimW/w1WooGlaiNoBkb6hEG6m4kXG0YecOypep7y3iOimDtamCznlpGgDzxTRKYHTpksV3IIUel/pLD1wzX3gLKhsradj+kAdegGDuGZJmC1NgZ02vB8MjnqYKZPcnBVfIlmJVGfqQLatz98JIbaF7ameNTVBqga1Aa0mwgkXv6HvhpTpVNVOpU0SFspEQbXIG5EWAwGubpo6kSoQmTEM7WsVQRMD64ZZLiRJV0VjvYyJO1xzF9trYdhQVkswzAq5iZN4BF5/mBiP8ALhLxvL1ArCmzMBAcg2M9gDy8vIYtOWyitLVAXapuIE+pUTbpGFHGcowClahdA4F10mmByLfERta374UlgcHkiyeUEKQIkAW7Dp6fbEVR4EBtzH1sOWDNMlIkbg3mduXXEecRQNLEAj4fT9/698cTwegjSmoA7R9B/fE7pIBtIt89sBajHiMFV2O8iPvH1wRksxzbmPtg2g0QlibQbGfzrhVxOl1W3WT+ADFiqUbSN/Tlz2++Fua8UIFE6Z8/7dsRQxPRIWBMjpHM/ceWDQbaoIaYMbxiCrRIIDA7QDtpxshKyCSRyPcdeeGShhl3iLyD06eRtic2IvbrGF4qiYNpAiNvTz6YnVjz+V+nQbHAigzMOSrYgaFQX7b9uRwOKsHreATH72x7nAfCOricaohjTJ5aQD15dI6YH4kseAbQZj7RhtRMKeQ8uXUYTcTYl4FgRvz+nL5YSebGI1XwRGw5zPy3wnyuQ1uwEwCdxv1OLN7kWH6SfUH54W1cwtBma4Bi4vFu+G3gisj72a4eElee4vy/fB3FcuIMdPt/ziL2ZzKP4gNwLjBvFWuY5/cYzjlMXJs59w+gQ9VeQdvnC7Tab4GzeWItyJ/LYc5ZD7xrCCWkf+v9vwYNr8OVonlftjW7JSwc7z1mInb7YK4PlvePBOlBd27SAPUkgADcnE/GeHFGBOx58rb4acPyXuzlgZ0NU1NbcqGiewn6nrixJZLSmT93TXwgBfhAMwDzJ5tG55+VsFDUsW7emCWddImBIj59vXEqU9XhUyV3+vyxUIWTOdE2WbTpkf3/ACcNETmCD6X9Z/phT7yLNy2OC8pXJaLwOv8AXGmjLeQh15bc/LAoYyJPMb4YaBc9umAa6DrHzk+mMpo1g0Qe1ecFOhMTAiOUeeOW5CVojQdSySDdgu+xUFh6RPfnfvarOKtAq36lPl6/I45BTQ6Qque9osPI4uPpnMudPidOspR7mmDKXKDvpYBl/wBpHfEuVzVJNMSAFZQu6gP0ETc3meeK9w3htSqhqojHTsVGohTK7AEkWNuUnFjQ06dSmQutW0KHIIXUA8LfY+Jxz+BeYxeSMBWVz5IAEgCQs7FWcKB/6yAcFZNq1RAyvFyGBAnUCZ5YEyuXM0qcRqonWP5WpFFP/wBn6jEfEs0ilQhtoE35yZwsiwH52UdjVooHMsrBpCgmB4fivfkTqvGCst7wU1dSdTTdhJ08yqAyF/zMcLss7O38VWDyGaoQ2wUgCSRpA7Hl1w0TMMqtpI07kosmYsdTNcC3i2HbDteDpm9fPCioZkbUZu5BIvvABif9QOIMxxtfdvCprZT4WENME26mw3jGlKuNcKS+lS2oxpBiyqBILGQdUWxJUrNLUnp06tSohLEASsTzsT2jAUhhlctC0xAJUCT/AJrb/XGVssNZOmTbfaZER05bYi4VmyqKrrAMDVJ+LobR6gnDXMLcDe/TzOOKaa2dsGnoqvEUYajfcye0jv8A8YGydZiQDaP32/cYszorWI5GR+djhDxDJlIZB5j+nljOzQdpV1py5DuAOXrgOvlZaQOQn9rcvTEeSYldQvaGHp+0euJstmiCwI5yP6YadkkFSmNURPI+vQYEq0+XI8+U+dxvythqh8RncyR+dcaZjLqVIufLf6X+uKoRXkcyUIiD+W/bE/8AiII5kmDHf86YA4wWR5En79xiNMyHWRbv98NxJUhhWqEFFAJ1G5taO8XwwrGyRciDsPzfCChUcvImBboLeRjDhWB0fh/Pw4pBZZHaKYPbc/16YVvVuLwD+dvlg+uf4enmw3/fClnOkrIk+VvKfliRhqUQx2ggcpkgj+mK7xGkrOUYWJMsdxH4MWXJ1gQttuW1vrgPP5UVXEAcxtz3+fnhoTAfZ5HoOF/8ZNiOU8sWuvTDiRhDQoRIabd7D15nDvJOdsZvDHJWjn/GuIVMvmgqU9WsXBMbHlyEfvywZkuN+9MGiyWklmERI6X57fbBntlw55XMKCTTM23jmAeRxW6nEqVOHDqARIF5IYTGkEtF7dR0x3cMIzjk4eac4PAt9os9WfMhKkKqE6UAhQwIB8zIBvyINpxfctQ0+62gJ9eonnvjn2fzNTNtrp0zpQCHNizITB/1FSFMdE2iMWr2Z48lZqaAEELfaJEdP6DC5oVorg5G8PY94tmivuf/ANgH+2Db86YYpUIqeDmPwYS8YYvWQCIprqP+pjC/TVh5kAA1+nywuNuh8lWQ53MBVM/Ht+/2GCqWaCU1YLqYKWgfEQNx3OCc/wAJ94hgeKLYjyGVOkaviWfl+/PGqWTKwj2d49RzVMmmCGFjIi/l/THufVg0cj9e2KTx5H4fXXMUj4HfxUzzDG8SJHiYWn95tVXjdM5I5knVCeEGBqc2AvzJIwpRtDjKmUP2m4ka1RqIYBFMFjaSu8csJavA6p8aJMLDQwClQZEd45djviPJ5UsSzgioxsT/AGNt8N+HJ7okusuRAY1W0eU05IPZgB5YUVQSdsE9nc0aY1HUPEKdQraA40g9IBg9MMkcmjpNTU7gGmbzJZiw/wBWqmB5eZwLlc3UpVWmnp1EGGGoNMiZ2KzFx2NsH18nTarSqUj4gSWpQQAZLTdmAhjceGASRNsUTkcZnUDS1fG9EawB8Kqy6zP+b3a/LCnNijq8NTTYSIm5Em88pj0xtxWrUzFRakGki01WDzMEkD0Kj54WHKlCVMSDe3Pv3iMJsaQ/y2c0sqMECQeRiYIly0klTfSN7eWJf8T77QgeCCYCwIaLamNgYjbrhSmWqu66lqe7MGmJAUkmbbz1A5xvh9Ty60iNM1HJANhpDHxNaD4h8gbcsFWF0b0MrFNKUoInxBpPe4AFufPvhhwhKRVoX3l7u/wE9ADc+RMC04XVuKoaZFVqkAlbEWvFrz1vtY22wVw3PfwhpQMrE3Ijwyfr2G5nnsYQW2GFvEQomxE7oOoCrHzmcEZfNIAFdwTYau3U9MJcwgdwRSYwJnUBH+1iSImcEZLiC1f4ZBptHxhjDRv4V2Yx+rEygpbNYycRoUHxK0jtcfm2Bswggg7HrG34cQBaQYGm7U2nSqFxE9TLST22w3y6B0giSLMRtPaLdMc8+E6I8pX/APBshMTfa28Y9SFaSLE/KTf7/TFpbLCNuX7YT1wjA2v05id4PPz/AHxC42P9UL0S8j8/J++NqYNwfmeeNkosraTfv1HP1xJVSxMbj67ffBrZSaZWfajLstORczvisZHMAHoQd/6YvXFE1IwI3uBb7dcUHNZchz9z/XFqmjOSp2Pg0KYJA3tcnvyxtw/NTUQmDG3fv54TJnRpCiR1n7WxG+ZhgB5COZPLBQux0NKusyLjpP2/thbxWoVZQP1Tz23g+Zn6HEHCMxoBDm4ie1pjt1jnB9Csxw+pVKMB8R9APz9+2EkV2Cci8ra5B2uP+MTUydYDEgDmeflvON6KBDBFttQ/cHlg5svzEEfMdZ3w1EHIjrU4GxA32tjak0Hn5YNSmCLm/wDTAGYplQTfTJ5fXviJxLjKxlpWomlhIP5/TFE9pPZSmrmrRpoW3KESD3Ucj2HfFqy2a2xBxY+Gen2xXHyNaM58aeGc6q1wBK7bfex6ER27bYWcPzQpZgVF2ex5Q3lhpx3Lm7qOuoD9QNw3+oRvzjFWr1h6H8t0I/N8dvdTicPR8cjpnsywq1Sah3vfry+QGH1RitSRIAO46Y517K8Y0JUcrr90qmORUE7zzG2Ou5bNUq1BaiAQyyCNjb7jphRhgqU/Q/I5kMgBwYyA/pHbphPwgn0m2LAkAXtjWOTNibjHBaVVAKtMMAZAMwDvyPXHL/bjiK+8p5dGCUqaiVUDQGvuN5A+nLHUfaHOMtNipEgHe4xxNM9TqvVeskiq2ltBAKkRDDV5dMRN+GkVizDTa3u1DHkwW/owGoYY0KOup7oNqqlTDFixBAJ0m56RbrzwlXLNSqBRL02FpYgHp8JEntGDszWaAyIiqTpEIDFt9XxTy3xAWXFECUAtQKtWC1OSCpIgFQTsCDcHYMCJAIEPG+KZYa6tIg1AA4GzQV0EEdp25emE+XyL5jLCvUqMbVFvvqAOx6AajiHLezvhLu3hBBJHME3+xwWFDGtxRaq06hNqQRrc2BQknyKH/wBsQZbh7PqcRDOxEtBgnna5xPxHgwpRTU62qWUDrAY/Qcus4mocPqhQhf4PDbY8zy6kj0wh4GpdqdNa5ACIshdtKxZQw8Um8mTckCTcA1s4XVGkrUcAqqj4ZLC2jlp2BMXjliNeL0zl3pMDcAggbESpgA3Fj4p/mjfCyqweSmimaf66cEG8CR4RBMXP1xTeCUsheWDPK+FXF2BAJNwZJMANAA267Thi2YCiKsSe8/JQY9TtywHTowSwVnaFJZvACyiW0rYkCQLjkI2OGdetUVA6oq8knxQB+/Mz1vcYTKQIMmT4h4VmegN7kktMbXg4dUMjADITTNpqKfuHuy94GK7Sq13cNUkISBLHSI6KBYWHQ79cXB0ViFDFQAIIUyTz3kL5mTgSG2Lq+TcsmnxTJLmwPUwwn5DG7Z/MZcmmF97Tid/Gm2x2jt/xhlTolV1QAdjqOkkdnO52xmWzdKNBpqe9gvmTuTbc9tsOkCkyLhHtAaoOtdJUmO4id9pGIs0FZpnnA9TO3bAXHMvSpIWJVDyAYNBPTQCR62wio8XPvBqPPlcT0sYmBtiOtM1i0x8M+q1VpVd2Hgb+eNx/qHTffDX3AjwmQe+K/Vq0c2pUkyCNMSpBEmQbfg5Y2biNSgoVy1QjmAddv5osxxEuOyu3UNYyHVrGw/Plik8YpqjmcF8e9qwjD+G4YieXXmBcf2xXOJ8fWqCdJk7eH8tiI8TQT5UyLM0b6lNj1wNUcgg7QeWBF4nG4IHrif8AxKuOWLcGjPumOsvnWqAQIA+IA7+cY6HwjMl/DpIAuC25tc+XLHNPZdh78Kdt9+kY6xw8C0bf088JRyV2wGrlARJANttoxDlsuVMDbkDex6H9jOHNKmCL48q0hucadDPuCM4GBM1e0x+dMaVcyrNFPU9hMbAg8zt++PKHDalQ+N4H8qwPmSJ7csYyTejaLSyxRnjolxHf+3fGjZ0Mkbn9vycM+MezNR0ik4DTMObG/USR8jgTL+zuYiKnu1PUMT8vCMSuOSei5ckWtlW4ioIP5H9sUniOVS55zyx0H2i9ms6n/aVao3JDAR6MQT6YrH/TikiorBzvrEfIHbGsYuJzzkpCT2ersjugH/dpsgPQ/EPnEeuOpewtAU8kibkmWHKWvvztb0jljleemnUDKIKEN9cW32W49KGlPhBGm+yk28iOmN0zE6ZwyuA0HpYzuJj+nzGHJqWN8U7K5qVB3MCT5G5j0Fxj3intDoXw3I3npMde2LukCjbJvafPBabXvBHrE/bHG8rWFNmdhqh4MAGxvz3vy88WDjvGzVLAE+HcDYmOnLFVqPq8HRp7ztjMuTxgs1biAanAUaTcFBCkxzS+hudrHAOTzYeolIsQjG5j4WMAkfTEfCqCAEuHqAfpRtJnvzgDpjfPU30ColMLTn4gfEDt4u/lywYJLRk8+lOcqpBUNURSN/4iuJ6T4gfmOWC+E5wNTZG+EGnHdUgsNuxPzxRF4c2jVqMljpg7mLnz/vi4ez2URiKTVIBJl9x40P1EiD28sKx0WPLKimlVe8jw9khqjnpJNvQYK4VxWjRpj3zKj1S1SD0ZiP8A+SPTFcyTlahy9banRqSIMNB1DSTuGA3E8xywZ7rL1Ar1WEkW/wBMmI7b4Yio0UbUpiqiwSDECOWk7chN8NcpTSQ5cWqgGVCoAGIUtp+LwoDA/Ux6SYWy4ZNQaKdtGqdTKWgjextt0YQcMeHqDTZVpo4mST4jqJhQAT8ItbYixiTCGtEuTzRIRHQElyVYwD7s3gSLam1E+nXBvv6gb3dPTB8EARAFyoee4nnfC7N8R1qyIgUlWZXImUjxN4TPxXBG46A4J4VUeppT3gYSW8MgaEETeSsk6f1EidoAwxBWak6abOhhgxYAwWFtK9EUACR85mJEepIWqGRd9KHQu9gf5j5MPPHi5Ra9HQjj3oLEzEkKVELJICzbnGoYGTMmlT0vVclf/GpLeYMmfkcFBY5q1VpgeEteZeSF9QXHzg98C57jC1AVZw0bKjQqxuS55evrincT429clF8HQAAljMDlIHmTgbJUA8oTHjUMzfDfXHzK4RaGObepWT3j2QkBTcTuRYk25z++Bk4fUCGogbUpmCJVlBhhI5j637S+9l8uK9ZpA90qgATZYEeshZPlh7kMxTd81TiEQ/CP5fiMW5wfXBVg3Qm4blEuYNJ1AMfp1XMKe4mO2C+F1qrnwxJ6nctOlZ7AAYLgVHOyprUSW8LVEkAL/NYTpXkLxJwgzdX3dT3YdVQdL7GBHoT1wmqBOzzjHs81SqzkcoJE6LWtCwY7c8Vqtw2mjEu0AGF8JMWJAMxG2L1kHVyFd1ERpV5PUyRy+2NOI8JpBpLqwJEhYG99gDA85w7Cl6c5zPBJsjKSbxz8+XK+FD8LqoxAUyN4/vjo/G9NNtQUM5ECTpK+aqLz9cA5DJp7o1aq6nYzLNCgk2gDcxy8ucYdi6oq3AKNRKoZgR4TB5C4+XPF54bx5xuCQIFv6HCzPcSViKdGmLDxMRvpn6g/tg/LcHeqi1DqplV+H9LsSAsHkJImZi+J2x6R0HhXEQ6BiR+2GborAE8/zbFA4blPdkgVHYIQGOyFj+lAb77EnqbYUZ/2szC1vd0mKooEgibg3EnfkD64q/okr0dNpoq9hiWlUAMGAeeKXV9pK0CKGr4JIcX1GJ2+EHeJ63xXK3t3WLGcsUhou2xB227YaoHZ2D3gDCdsEsoYWvjleW9uS4AamQxgWYQZ+2LLkuOqPC0g2EC9/wAP3wKSE4ssdWiNzit8dSmUbWQALksARHecH5jjVMSrOAY52tik+0HtAKqPTp09Q+Eu1l9OpuMTJ/AS+lR9oOE0mVqlKsN4KBSBPrtirZWs1J5Hee454ZvIYioIJAg9dhNu37YanL03r0o0PYL0DXJM+eoj0GCLrDCUfh5lvaNhTZQdx/T+/wA8A5fiFSpUGskqdoP18sEv7NkVhTUeFyQhJ2LA6J9dPzwPlcnUog1DZQQLcrwDfvbcXxSr0l34TZjIqahV5RokEMBynpBGA8lSLhpILILHrv05G9+WLdwrhCVKRqFzLkhST4Q0TebggA3vbcbDA3CsuleoEdArmZZRpJCKxMEbEifQDCbGhd/09Gy4rIQYN7CQ0TE8m333G2xj2jlKlWgWDaaYZQ5+dzysLeuGKezOmsKa1fDU8JO0gciBYnWG8oGI6GWqq3+EWYdV1AdwSPIyR9cACennHpBtIB8MLPL/ADD/ADbfLGJxIp41sWPwjYAEW8vCuLIeEqjaHALimJG8Nz+QNP64kbgnvAgSkAulbncw5vtf41Hp2wqHYFlM7SIPvA7VWhkvcr4pIA6nUv8Au7YmyXCaRQNVY6jy94U0jbTAtaN8acU9ma7VC/vVQjkGhgs2Fu/5zwizHvNREC1paSTHMmeeDQi6OsppqOs6SEUAQir4QPmxsO5vbC6nmERdKgzpGpRYXGkljyJBPkJjeRmQcuyAmRIEnoDqgdyRfAOcdnqMqjc2iwJ5HmTa9+2JKoZ5XPLVYgKqsLAmNljSqDfSIE2vF+mLPlMpFEu+mUAuhsGB1WJsSDzNp8rVT2eRgGcyVUwAgGpjNhJG08/tiycfCU6ABI8V41krPPTzYzzBjlub1FCkxdn81TNKiaTfxKeosZ2EmZYnZiSP+Jwqz2aE0apcHTJEXI0hRJBN4iZMSxNoGJcrl5pVAFPiHhXqJBJPW6ADl23xW+O5onSp06lhRp3lWfkLQQflHXDEEcJptWYmdITUwBHckC/xcpB5EjBgmoXKiCY1jowLssepf8OBuF1np00ZyQjlgKijxgj9LEEGJJsZ8sPMnw9fd1KgqBo0lhbWVuGK91MnmPLCY0O/ZVFp0nJcBo1WswYARIPIQfQxtfEGRT3tStpBVHAWpBtqsfCxHbpI7YkopTGsUo960U5qbaPdyPmUI88AVM0oWktJGJKMWHI9TcWAiSepjAtCk7Y6zL0wP4R1uABBkwvQBSIHyB5zit1XR84pa4lQY+FAN+QFgOn7YO4jmtChhJggMTpImLwWlj9P6I8hwxqjMfhZgWAO24A26yN8J7LiP6fFaaVS60UiCFYiQIFoHqJO57DEnFeIpUpqdRQldQiBqvz67eQtgbJUKiMFs7aICA825kbDuZ2gCDic0QX0Mqu7DTvKqI5AkiPLp0thsCH2Y4QKlOrmKp1KlgGPxEBibk8o+2F/FHOpWLLpCj3dKmDMECDftF+mm/WxHNBqKU6YOkbxFz4lIA6wRitu6H3lSpY7BQbCBA1HmYsF6YPCXlmvsogeqfACRqMRy5i3KAcXZQac02+CFZDz0NYg91YD0OKn7AZhVq3uWGqYi3L/AO4HlhlmuI6x7tSddJ3Xe7LbSPmTGCJUhnRXSk+EPJlpgFjClha9rT6DeRQM8FbMMJJUQC1+ZJNsWR67OGsQ8wBzFwJANpsbdsJTlWVHLpp1Enr4byfOCfODgbyOKHGQzStWKgQlMQTfUwBBVR0FoPbAeZ4ealKSY1u1TTzAWZUTzkg489nUD1HZng6gOxU2M+n3GCuN5f3NOmQxguwYzsxUqZ53geoOEKWGVSummqAAB4hbpbUL+uLHSFSlclvEqsGneDcT/Nee+3O1bzLltT7mZ9O/e0jFp4dX97QAMMaROpTsyGCfKwF9gb8riB6CqVBXdEq3JJEkm1uc8tQt2IwxXKBqjLAWmsrEbTcetonCeuFcqlOptBpk3Ij9JI3FtjcRzBnEme4uVBQyHITUR+nVrU7c/EN9icOibYp4rw5KtPUtP9TFW/ygR9wflis5OoyMJ3BifWJx1p2p0wtIKLJpFuZGpif/AJB7Tiq1OBBqYt/EcnSOcr4j6y0dJwUNMlyOYWqUYnxU0kmNwOfmu/4cGvk6dUcgKtjew8QaPMEH0A64qlSlUoVNJJBB+sXHzxNTz7UgaZNtSVEPS4tbkBqBG1sCE0WnM5I1AtKmumlJAIHwKPEzRzdmkknsMV7Kh6NQ1BupYxuNRFhHO0j1xYOEVnqLZoIBnsxMx8gBiKvlgxIpAh1NyR4nvJGoyADeYFxaYwVYXQJVzyBadSm2zKXHNdRN45m1/MYcvUpq6VxBdaDOx3GoLTjzMa48jip1sm1Mliq05EeN0WSRyBNzY97DA/C+I+6JVgGIEC4i8SZ2iB9sAUP+GLUZGZWpq9X46jklgoiERQDc3k2MD5E5yjmlcD3mkMfhSC6+GAN9IeCQBJiScV3IZnSVZiVIgIgMmBtfYAm5674Z5rjMlAFYQCANZB6k8yZN5Ez9MMQacg5lANEmTDa3MRz2AHYiT2wYP4JKJQLCZJ1c4A6dAMBDNIYZGZqrfpJK36+ISY5bAcsMsrm4WCKUzfwl79203OAdlTSkzNpiGBBmeQkW9Z+mD8zlvcrqAk1RAI2sRJncg7TP9cZjMJDYy4JlKTUlQMdMjUBbU5J3/wAqKpY9bAY8zLLXemzgiiWimgsxp0wTfVsp0wZEx0mMeYzDWiXsq3G89Uk1W/hByClNd1RZ0z5zN+uEOSoNUYuQfdg+MhZ0gkXIW8bX5YzGYQ/C0V8xSYtSGh1eGSqCQQYuH3BUbgxIk7Y3yFU02YI6VKStElYdgbkAcxYm/XljzGYGCLZnab66VamyymkMqNdVNgDbSh2gEMJ588V7MVdVaq1MOulRKuNLqNQmAIBbtERjMZivBeg9CqGqeFiAWuzjxEltrTt53gWHJkcsKdQVFdjIK3E7kgjpFzaPrGPMZiPSvA/LvoAKaRqFjp1SZuWuO4jpyGBs3nCHdWp/HJ1hb6jeJJiDO0A4zGYokU1MytMgHVTBjn4gJ335jobX3wrzyNUdkGqI1A20xyMRc7dpvjMZhMpD/gHDDSy71Syp72FQtyIJZZI2DG09hhS6Gq7MSBVESCYm94K7tv6X5Y8xmF4V6W7h6otOk7nUXqAsxuRIK9uvfA2fM08zq+OmX0+SAED5FseYzD8E9i/hmRIpipTCtDKdOx5/Qj74J9paLsjqAWWoNRtdSLz2gSPOe+PMZhIJCvKcM0rUWxKaV7MjreRzBtB88R8GoVKFfSDG4Kk7ld7iCCN/LGYzAwQ4pW/iEeJQCoA/SjardTy9cC0qoqHMEgD+GO4nUHBHOfzljMZhoTGruao1L8Wtu0AoFv33HpjdK5WrBF0/hqBuFEliB/MSYGMxmKII+J5BKr1Kjn4QigD4feOQIHkxLE9I9KxWyVWwElF+E8tO835mZ76sZjMSykHJmTSqFCWliGMLqEwfDbfcHDSrmkRgNSy5F1WNJIhbEwbxYnrtFsxmBCJKlFaY1NTEk2ZRI62UrA+3nhfnqWXqMUNIamNmCgNb/Ss9Nx648xmGAuf2YpsSadQz9PIvOk+QviTL5WtSYllerytEAWE87YzGYljQ0yrlpOoQN1CFP/pmXELUalQlhRpuJidDn6q0HGYzAhn/2Q=="
            />
          </div>

          {/* <div className="middle">
         <div className="middleleft">
          <div className="featureditems">
            <div className="featuredlabel">
              <h1>Preview:</h1>
            </div>
            <div className="featureditemslist">
              featured items
            </div>
          </div>
        </div>
        <div className="middleright">
          <div className="waitlabel" style={{ backgroundColor: color }}>
            <div className="waittime"></div>
            min
          </div>
          <div className="more">
            <button className="morebutton">
              Full Menu <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div> 
      </div> */}
        </section>
      </div>
      <div className="bottom-justified">
        <div className="welcome">Good Morning, Sam</div>
        <div className="horizontal-scroll">
          <div className="content-card">
            {/* <div className="videos"> */}
            <div className="video-responsive">
              <iframe
                width="426.5"
                height="240"
                src={`https://www.youtube.com/embed/GRLtD01Tkg4`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
              />
            </div>
            <div className="description">What to feed your dog today!</div>
          </div>
          <div className="content-card">
            {/* <div className="videos"> */}
            <div className="video-responsive">
              <iframe
                width="426.5"
                height="240"
                src={`https://www.youtube.com/embed/GRLtD01Tkg4`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
              />
            </div>
            <div className="description">What to feed your dog today!</div>
          </div>
          <div className="content-card">
            {/* <div className="videos"> */}
            <div className="video-responsive">
              <iframe
                width="426.5"
                height="240"
                src={`https://www.youtube.com/embed/GRLtD01Tkg4`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
              />
            </div>
            <div className="description">What to feed your dog today!</div>
          </div>
        </div>
        <section className="categories">
          <button>
            <Link to="/category/barking"> Barking </Link>
          </button>
          <button>
            <Link to="/category/teething"> Teething </Link>
          </button>
          <button>
            <Link to="/category/feeding">Feeding </Link>
          </button>
          <button>
            <Link to="/category/bathroom">Bathroom </Link>
          </button>
        </section>
      </div>
    </div>
  );
};
