<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('beranda');
});
Route::get('/celengan', function () {
    return view('celengan');
});
Route::get('/dekorasi', function () {
    return view('dekorasi');
});
Route::get('/patung', function () {
    return view('patung');
});
Route::get('/pot', function () {
    return view('pot');
});


