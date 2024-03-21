<?php

namespace App\Http\Controllers;
use App\Models\festival_tbl;
use Illuminate\Http\Request;

class marginController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = festival_tbl::all();
        return response()->json($data);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = new festival_tbl([
            'hotel_id' => $request->get('hotel_id'),
            'room_id' => $request->get('room_id'),
            'start_date' => $request->get('start_date'),
            'end_date' => $request->get('end_date'),
            'festival_name' => $request->get('festival_name'),
            'price' => $request->get('price'),
            'margin_percentage' => $request->get('margin_percentage'),
            'total_price' => $request->get('total_price'),
            
        ]);
        if ($data->save()) {
            return response()->json(['status' => 'success', 'message' => 'Data added successfully']);
        } else {
            return response()->json(['status' => 'failed', 'message' => 'Error']);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $data = festival_tbl::find($id);
        $data->hotel_id = $request->get('hotel_id');
        $data->start_date = $request->get('start_date');
        $data->end_date = $request->get('end_date');
        $data->festival_name = $request->get('festival_name');
        $data->price = $request->get('price');
        $data->margin_percentage = $request->get('margin_percentage');
        $data->total_price = $request->get('total_price');
        if ($data->update()) {
            return response()->json(['status' => 'success', 'message' => 'Data Update Successfully']);
        } else {
            return response()->json(['status' => 'failed', 'message' => 'Error']);
        }        

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $date = festival_tbl::find($id);
        if ($date->delete()) {
            return response()->json(['status' => 'success', 'message' => 'Data Delete Successfully']);
        } else {
            return response()->json(['status' => 'failed', 'message' => 'Error']);
        }
    }
}
