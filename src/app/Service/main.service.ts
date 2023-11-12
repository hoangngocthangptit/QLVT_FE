import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  constructor(private http: HttpClient) {

  }
  private token = localStorage.getItem('token');
  private httpOptions = {
    headers: new HttpHeaders({ 'content-type': 'application/json', token: this.token })
  };
  getAllKho(): Observable<any> {
    return this.http.get('http://localhost:8080/kho', this.httpOptions);
  }
  deleteKho(id: number): Observable<any> {
    return this.http.delete(`http://localhost:8080/kho/delete/${id}`);
  }
  addKho(data: any): Observable<any> {
    return this.http.post('http://localhost:8080/kho/insert', data);
  }
  updateKho(id: number, data: any): Observable<any> {
    return this.http.put(`http://localhost:8080/kho/edit/${id}`, data);
  }
  getAllChiNhanh(): Observable<any> {
    return this.http.get('http://localhost:8080/chi-nhanh', this.httpOptions);
  }
  deleteChiNhanh(id: number): Observable<any> {
    return this.http.delete(`http://localhost:8080/chi-nhanh/delete/${id}`);
  }
  addChiNhanh(data: any): Observable<any> {
    return this.http.post('http://localhost:8080/chi-nhanh/insert', data);
  }
  updateChiNhanh(id: number, data: any): Observable<any> {
    return this.http.put(`http://localhost:8080/chi-nhanh/edit/${id}`, data);
  }

  //nhà cung cấp
  getAllNhaCungCap(): Observable<any> {
    return this.http.get('http://localhost:8080/nha-cung-cap', this.httpOptions);
  }
  deleteNhaCungCap(id: number): Observable<any> {
    return this.http.delete(`http://localhost:8080/nha-cung-cap/delete/${id}`);
  }
  addNhaCungCap(data: any): Observable<any> {
    return this.http.post('http://localhost:8080/nha-cung-cap/insert', data);
  }
  updateNhaCungCap(id: number, data: any): Observable<any> {
    return this.http.put(`http://localhost:8080/nha-cung-cap/edit/${id}`, data);
  }

  //vật tư
  getAllVatTu(): Observable<any> {
    return this.http.get('http://localhost:8080/vat-tu', this.httpOptions);
  }
  deleteVatTu(id: number): Observable<any> {
    return this.http.delete(`http://localhost:8080/vat-tu/delete/${id}`);
  }
  addVatTu(data: any): Observable<any> {
    return this.http.post('http://localhost:8080/vat-tu/insert', data);
  }
  updateVatTu(id: number, data: any): Observable<any> {
    return this.http.put(`http://localhost:8080/vat-tu/edit/${id}`, data);
  }
  // nhân viên
  getAllNV(): Observable<any> {
    return this.http.get('http://localhost:8080/User/getAll', this.httpOptions);
  }
  updateNV(id: number, data: any): Observable<any> {
    return this.http.put(`http://localhost:8080/user/edit/${id}`, data);
  }
  //-----------------------
  // phiếu nhập

  /* GET http://localhost:8080/phieu-nhap?maNV=NV0001
  tạm thời support search bằng 1 trong các trường sau: maPN, maNV, maKho, ngay(yyyy-MM-dd)
  {
    "message": "thành công",
    "statusCode": 200,
    "obj": [
      {
        "maPN": "PN6714",
        "ngay": "2021-11-03",
        "maKho": "KHO0001",
        "maNV": "NV0001",
        "ctpn": [
          {
            "maVT": "VT0001",
            "soLuong": 20,
            "donGia": 100000.0
          }
        ]
      }
    ]
  }
  */
  getAllPhieuNhap(): Observable<any> {
    return this.http.get('http://localhost:8080/phieu-nhap', this.httpOptions);
  }

  //DELETE http://localhost:8080/phieu-nhap/delete/PN9974
  deletePhieuNhap(id: number): Observable<any> {
    return this.http.delete(`http://localhost:8080/phieu-nhap/delete/${id}`);
  }

  /* 
  POST http://localhost:8080/phieu-nhap/insert
  Content-Type: application/json

  {
    "maKho": "KHO0001",
    "maNV": "NV0001",
    "ngay": "2021-11-03",
    "ctpn": [
      {
        "soLuong": 10,
        "donGia": 100000,
        "maVT": "VT0001"
      }
    ]
  }
  */
  addPhieuNhap(data: any): Observable<any> {
    return this.http.post('http://localhost:8080/phieu-nhap/insert', data);
  }

  /*
  PUT http://localhost:8080/phieu-nhap/edit/PN2717
  Content-Type: application/json

  {
    "maKho": "KHO0001",
    "maNV": "NV0001",
    "ngay": "2021-11-03",
    "ctpn": [
      {
        "soLuong": 20,
        "donGia": 100000,
        "maVT": "VT0001"
      }
    ]
  }
  */
  updatePhieuNhap(id: number, data: any): Observable<any> {
    return this.http.put(`http://localhost:8080/phieu-nhap/edit/${id}`, data);
  }

  //-----------------------
  // phiếu xuất
  /* GET http://localhost:8080/phieu-xuat?maNV=NV0001
  tạm thời support search bằng 1 trong các trường sau: maPX, maNV, maKho, ngay(yyyy-MM-dd)
  {
    "message": "thành công",
    "statusCode": 200,
    "obj": [
      {
        "maPN": "PX0489",
        "ngay": "2021-11-03",
        "maKho": "KHO0001",
        "maNV": "NV0001",
        "ctpx": [
          {
            "maVT": "VT0001",
            "soLuong": 20,
            "donGia": 100000.0
          }
        ]
      }
    ]
  }
  */
  getAllPhieuXuat(): Observable<any> {
    return this.http.get('http://localhost:8080/phieu-xuat', this.httpOptions);
  }

  //DELETE http://localhost:8080/phieu-xuat/delete/PX9974
  deletePhieuXuat(id: number): Observable<any> {
    return this.http.delete(`http://localhost:8080/phieu-xuat/delete/${id}`);
  }

  /*
  POST http://localhost:8080/phieu-xuat/insert
  Content-Type: application/json

  {
    "maKho": "KHO0001",
    "maNV": "NV0001",
    "ngay": "2021-11-03",
    "ctpx": [
      {
        "soLuong": 10,
        "donGia": 100000,
        "maVT": "VT0001"
      }
    ]
  }
  */
  addPhieuXuat(data: any): Observable<any> {
    return this.http.post('http://localhost:8080/phieu-xuat/insert', data);
  }

  /*
  PUT http://localhost:8080/phieu-xuat/edit/PX0489
  Content-Type: application/json

  {
    "maKho": "KHO0001",
    "maNV": "NV0001",
    "ngay": "2021-11-03",
    "ctpx": [
      {
        "soLuong": 20,
        "donGia": 100000,
        "maVT": "VT0001"
      }
    ]
  }
  */
  updatePhieuXuat(id: number, data: any): Observable<any> {
    return this.http.put(`http://localhost:8080/phieu-xuat/edit/${id}`, data);
  }

  //-----------------------
  // báo cáo

  /* GET http://localhost:8080/bao-cao/thong-ke-nhap-xuat

  {
    "message": "thành công",
    "statusCode": 200,
    "obj": [
      {
        "maVT": "VT0001",
        "tenVT": "Vat tu 1",
        "soLuongNhap": 30,
        "soLuongXuat": 365,
        "donGiaNhap": 200000,
        "donGiaXuat": 134534
      },
      {
        "maVT": "VT0002",
        "tenVT": "Vat tu 2",
        "soLuongNhap": 0,
        "soLuongXuat": 3454,
        "donGiaNhap": 0,
        "donGiaXuat": 345434555
      }
    ]
  }
  */
  getThongKeNhapXuat(): Observable<any> {
    return this.http.get('http://localhost:8080/bao-cao/thong-ke-nhap-xuat', this.httpOptions);
  }

  /* GET http://localhost:8080/bao-cao/thong-ke-nhap-xuat-chi-nhanh/CN0001
  {
    "message": "thành công",
    "statusCode": 200,
    "obj": [
      {
        "maVT": "VT0001",
        "tenVT": "Vat tu 1",
        "soLuongNhap": 30,
        "soLuongXuat": 365,
        "donGiaNhap": 200000,
        "donGiaXuat": 134534
      },
      {
        "maVT": "VT0002",
        "tenVT": "Vat tu 2",
        "soLuongNhap": 0,
        "soLuongXuat": 3454,
        "donGiaNhap": 0,
        "donGiaXuat": 345434555
      }
    ]
  }
  */
  getThongKeNhapXuatChiNhanh(id: number): Observable<any> {
    return this.http.get(`http://localhost:8080/bao-cao/thong-ke-nhap-xuat-chi-nhanh/${id}`, this.httpOptions);
  }

  /* GET http://localhost:8080/bao-cao/thong-ke-nhap-xuat-kho-theo-ngay
  {
    "message": "thành công",
    "statusCode": 200,
    "obj": [
      {
        "maKho": "KHO0001",
        "tenKho": "Kho so 1",
        "ngay": "2023-11-21",
        "tongDonGiaNhap": 0,
        "tongSoLuongNhap": 0,
        "tongDonGiaXuat": 345469089,
        "tongSoLuongXuat": 3799,
        "chiNhanh": "Chi nhánh 1"
      },
      {
        "maKho": "KHO0001",
        "tenKho": "Kho so 1",
        "ngay": "2021-11-03",
        "tongDonGiaNhap": 200000,
        "tongSoLuongNhap": 30,
        "tongDonGiaXuat": 100000,
        "tongSoLuongXuat": 20,
        "chiNhanh": "Chi nhánh 1"
      }
    ]
  }
  */
  getThongKeNhapXuatKhoTheoNgay(): Observable<any> {
    return this.http.get('http://localhost:8080/bao-cao/thong-ke-nhap-xuat-kho-theo-ngay', this.httpOptions);
  }

}
