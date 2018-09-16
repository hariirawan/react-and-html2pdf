import React, { Component } from 'react';
import logo from './logo.svg';
import html2pdf from 'html2pdf.js';
import Base64 from 'base-64';
import firebase from 'firebase';
import './App.css';
import './Style.css';

class App extends Component {
  print = () => {
    var element = document.getElementById('element-to-print');
    var opt = {
      margin: 1,
      filename: 'test.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    // New Promise-based usage:
    // html2pdf()
    //   .from(element)
    //   .set(opt)
    //   .save();

    html2pdf()
      .from(element)
      .set(opt)
      .toPdf()
      .get('pdf')
      .then(async res => {
        var encode = Base64.encode(res.output());
        var ref = firebase.storage().ref(`surat_menyurat/surat.pdf`);
        try {
          await ref.putString(encode, 'base64');
          window.open(res.output('bloburl'), '_blank');
        } catch (err) {
          console.log(err);
        }
      });

    // Old monolithic-style usage:
    // html2pdf(element, opt);
  };
  render() {
    let data = [
      { key: 'Nama Lengkap', value: 'Hari Irawan' },
      { key: 'Jenis Kelamin', value: 'Laki-Laki' },
      { key: 'Tempat Tanggal Lahir', value: 'Jerua, 31-Desember-2013' },
      { key: 'Nomor KK/KTP', value: '0009385885888595999' },
      { key: 'Pekerjaan', value: 'Programer' },
      { key: 'Agama', value: 'Islam' },
      { key: 'Kewarganegaraan', value: 'Indonesia' },
      { key: 'Alamat', value: 'Jerua Desa Montong Beter Kecamatan' }
    ];
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <button onClick={this.print}>Print</button>
        <div>
          <div id="element-to-print">
            <div>
              <table>
                <tbody>
                  <tr>
                    <td width="25%" />
                    <td className="latter-head">
                      RUKUN TETANGGA RT001/RW009
                      <br />
                      KELURAHAN JATI PADANG JAKARTA SELATAN
                    </td>
                    <td width="25%" />
                  </tr>
                  <tr>
                    <td colSpan="3" className="border" />
                  </tr>
                  <tr>
                    <td colSpan="3" className="border-1" />
                  </tr>
                  <tr>
                    <td />
                    <td className="prihal">
                      <b>SURAT KETERANGAN MENINGGAL DUNIA</b>
                    </td>
                    <td />
                  </tr>
                  <tr>
                    <td />
                    <td className="no-surat">
                      <b>NO: 009/001/008/2018</b>
                    </td>
                    <td />
                  </tr>
                  <tr>
                    <td className="kalimat-pembuka" colSpan="3">
                      Yang bertanda tangan dibawah ini Ketua RT001/RW009 Desa
                      pasir angin kecamatan pasar minggu, Menerangkan bahwa:
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="3" className="isi-surat">
                      <table>
                        <tbody>
                          {data.map((data, key) => {
                            return (
                              <tr key={key}>
                                <td width="25%">{data.key}</td>
                                <td width="2%">:</td>
                                <td>{data.value}</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td className="kalimat-penutup" colSpan="3">
                      Adalah benar warga kami dilingkungan RT.001/RW.007 Perum
                      Griya Alama Sentosa, Desa pasir angin, Kecamatan
                      Cileungursi, Kabupaten Bogor yang telah meninggal dunia
                      pada:
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="3" className="isi-surat">
                      <table>
                        <tbody>
                          <tr>
                            <td width="25%">Hari/tanggal</td>
                            <td width="2%">:</td>
                            <td>Miggu, 31-12-1993</td>
                          </tr>
                          <tr>
                            <td>Jam</td>
                            <td>:</td>
                            <td>12:00</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="3" className="kalimat-penutup">
                      Demikian surat ini dibuat untuk dipergunakan sebagaimana
                      semestinya
                    </td>
                  </tr>
                  <tr className="paraf">
                    <td style={{ textAlign: 'center' }}>Pemohon</td>
                    <td />
                    <td style={{ textAlign: 'center' }}>Ketua RT.01 RW.10</td>
                  </tr>
                  <tr className="paraf">
                    <td style={{ paddingTop: '80px', textAlign: 'center' }}>
                      Hari Irawan
                    </td>
                    <td />
                    <td style={{ paddingTop: '80px', textAlign: 'center' }}>
                      Ulil Albab
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
