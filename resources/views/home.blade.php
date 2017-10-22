@extends('layouts.app')

@section('content')
    <notes v-if="showNotes" @shownote="toggleShowNote" @createnote="toggleCreateNote"></notes>
    <create-note v-if="showCreateNote" @shownotes="toggleShowNotes"></create-note>
    <note v-if="showNote" :note="note" @shownotes="toggleShowNotes"></note>
@endsection
