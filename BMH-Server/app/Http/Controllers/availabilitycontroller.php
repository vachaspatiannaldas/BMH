<?php

namespace App\Http\Controllers;

use App\Models\availability;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class availabilitycontroller extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        // $data = availability::all();
        $data = DB::table('availabilities')
            ->join('hotels', 'hotels.id','=','availabilities.hotel_id')
            ->join('rooms', 'rooms.id', '=', 'availabilities.room_id')
            ->select('*', 'hotels.id as hotelid', 'hotels.name as hotelname', 'rooms.id as roomid', 'rooms.name as roomname')
            ->get();
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
        
        $hotel_id = $request->get('hotel_id');
        $room_id = $request->get('room_id');
        $start_date = $request->get('start_date');
        $end_date = $request->get('end_date');

        $data = new availability([
            'hotel_id' => $hotel_id,
            'room_id' => $room_id,
            'start_date' => $start_date,
            'end_date' => $end_date,
        ]);

        if ($data->save()) {
            return response()->json(['status' => 'success', 'message' => 'Availability Added Successfully']);
        } else {
            return response()->json(['status' => 'failed', 'message' => 'Availability Not Added']);
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
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
        $data = availability::find($id);
        if ($data->delete()) {
            return response()->json(['status' => 'success', 'message' => 'Deleted']);
        } else {
            return response()->json(['status' => 'failed', 'message' => 'Not Deleted']);
        }
    }
}
